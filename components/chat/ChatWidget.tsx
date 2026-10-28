"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { MessageCircle, RotateCcw, Send, X } from "lucide-react";
import type { ChatMessage } from "@/lib/chat/schema";
import { cn } from "@/lib/utils";

const SUGGESTIONS = [
  "What does AlliancePay include?",
  "Which kinds of stores is it for?",
  "How do I contact AlliancePay?",
];

const PATH_PATTERN =
  /(\/(?:products|features|industries|pricing|contact|faq|resources|about|privacy|terms|cookies)(?:\/[a-z0-9-]+)*)/g;

function TypingIndicator() {
  return (
    <span className="chat-typing inline-flex items-center gap-1 py-1" aria-label="Thinking">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
    </span>
  );
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function MessageText({ text }: { text: string }) {
  const plain = text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/`([^`]+)`/g, "$1");
  const parts = plain.split(PATH_PATTERN);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("/") ? (
          <Link
            key={`${part}-${index}`}
            href={part}
            className="font-semibold text-primary underline-offset-2 hover:underline"
          >
            {part}
          </Link>
        ) : (
          <span key={`${index}-${part.slice(0, 12)}`}>{part}</span>
        ),
      )}
    </>
  );
}

export function ChatWidget() {
  const panelId = useId();
  const titleId = useId();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const generationRef = useRef(0);
  const [open, setOpen] = useState(false);
  const [panelRendered, setPanelRendered] = useState(false);
  const [panelShown, setPanelShown] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshSpin, setRefreshSpin] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const teaserDismissed = useRef(false);

  useEffect(() => {
    if (!open) {
      setPanelShown(false);
      if (prefersReducedMotion()) {
        setPanelRendered(false);
        return;
      }
      const timer = window.setTimeout(() => setPanelRendered(false), 420);
      return () => window.clearTimeout(timer);
    }

    setPanelRendered(true);
    if (prefersReducedMotion()) {
      setPanelShown(true);
      return;
    }

    setPanelShown(false);
    let inner = 0;
    const outer = window.requestAnimationFrame(() => {
      inner = window.requestAnimationFrame(() => setPanelShown(true));
    });
    return () => {
      window.cancelAnimationFrame(outer);
      window.cancelAnimationFrame(inner);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      teaserDismissed.current = true;
      setTeaser(false);
      return;
    }
    if (teaserDismissed.current) return;
    const timer = window.setTimeout(
      () => setTeaser(true),
      prefersReducedMotion() ? 400 : 3200,
    );
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!panelShown) return;
    inputRef.current?.focus();
  }, [panelShown]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [messages, pending, open]);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  async function send(text: string) {
    const content = text.trim();
    if (!content || pending) return;

    const generation = generationRef.current;
    const nextUser: ChatMessage = { role: "user", content };
    const history = [...messages, nextUser].slice(-12);
    setMessages([...history, { role: "assistant", content: "" }]);
    setDraft("");
    setError(null);
    setPending(true);

    const controller = new AbortController();
    abortRef.current?.abort();
    abortRef.current = controller;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });

      if (!response.ok || !response.body) {
        let message = "The assistant could not reply just now.";
        try {
          const payload = (await response.json()) as { error?: string };
          if (payload.error) message = payload.error;
        } catch {
          // Keep the fallback message.
        }
        if (generation !== generationRef.current) return;
        setMessages(history);
        setError(message);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistant = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistant += decoder.decode(value, { stream: true });
        if (generation !== generationRef.current) return;
        const next = assistant;
        setMessages([...history, { role: "assistant", content: next }]);
      }

      if (generation !== generationRef.current) return;
      assistant += decoder.decode();
      if (!assistant.trim()) {
        setMessages(history);
        setError("The assistant returned an empty reply. Please try again.");
      }
    } catch (caught) {
      if (caught instanceof DOMException && caught.name === "AbortError") {
        return;
      }
      if (generation !== generationRef.current) return;
      setMessages(history);
      setError("The assistant could not be reached. Check your connection and try again.");
    } finally {
      if (abortRef.current === controller) setPending(false);
    }
  }

  function refreshChat() {
    generationRef.current += 1;
    abortRef.current?.abort();
    abortRef.current = null;
    setMessages([]);
    setDraft("");
    setError(null);
    setPending(false);
    setRefreshSpin(true);
    window.setTimeout(() => setRefreshSpin(false), prefersReducedMotion() ? 0 : 420);
    inputRef.current?.focus();
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void send(draft);
  }

  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-[55] sm:right-6">
      {panelRendered ? (
        <section
          id={panelId}
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className={cn(
            "chat-panel pointer-events-auto absolute right-0 bottom-[calc(100%+0.75rem)] flex h-[min(32rem,calc(100dvh-7rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-white shadow-md",
            panelShown && "is-open",
          )}
        >
          <header className="chat-panel-header flex items-start justify-between gap-3 border-b border-border bg-surface px-4 py-3">
            <div>
              <h2 id={titleId} className="text-sm font-semibold text-foreground">
                AlliancePay assistant
              </h2>
              <p className="text-xs text-muted">
                Product questions for independent retailers
              </p>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="rounded-lg p-1.5 text-foreground hover:bg-white disabled:opacity-40"
                aria-label="Start a new chat"
                disabled={messages.length === 0 && !error && !pending}
                onClick={refreshChat}
              >
                <RotateCcw
                  className={cn("h-4 w-4", refreshSpin && "chat-refresh-spin")}
                  aria-hidden
                />
              </button>
              <button
                type="button"
                className="rounded-lg p-1.5 text-foreground hover:bg-white"
                aria-label="Close chat"
                onClick={() => {
                  setOpen(false);
                  launcherRef.current?.focus();
                }}
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </header>

          <div className="chat-panel-body min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4" data-lenis-prevent>
            {messages.length === 0 ? (
              <div className="space-y-3">
                <p className="chat-intro text-sm leading-6 text-muted">
                  Ask about checkout, inventory, industries, or how to talk with the team. Pricing amounts are not published yet.
                </p>
                <ul className="space-y-2">
                  {SUGGESTIONS.map((suggestion) => (
                    <li key={suggestion} className="chat-suggestion-in">
                      <button
                        type="button"
                        className="w-full rounded-xl border border-border bg-surface px-3 py-2 text-left text-sm font-medium text-foreground transition-colors hover:border-primary/40"
                        onClick={() => void send(suggestion)}
                      >
                        {suggestion}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={cn(
                    "chat-message-in max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-6 whitespace-pre-wrap",
                    message.role === "user"
                      ? "chat-message-user ml-auto bg-primary text-white"
                      : "chat-message-assistant bg-surface text-foreground",
                  )}
                >
                  {message.role === "assistant" && message.content.length === 0 && pending ? (
                    <TypingIndicator />
                  ) : message.role === "assistant" ? (
                    <>
                      <MessageText text={message.content} />
                      {pending && index === messages.length - 1 ? (
                        <span className="chat-caret" aria-hidden />
                      ) : null}
                    </>
                  ) : (
                    message.content
                  )}
                </div>
              ))
            )}
            {error ? (
              <p className="text-sm text-danger" role="alert">
                {error}
              </p>
            ) : null}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={onSubmit} className="chat-panel-form border-t border-border p-3">
            <label htmlFor={`${panelId}-input`} className="sr-only">
              Message
            </label>
            <div className="flex items-end gap-2">
              <textarea
                id={`${panelId}-input`}
                ref={inputRef}
                rows={2}
                value={draft}
                maxLength={1200}
                placeholder="Ask about AlliancePay"
                disabled={pending}
                className="min-h-11 flex-1 resize-none rounded-xl border border-border bg-white px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60"
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void send(draft);
                  }
                }}
              />
              <button
                type="submit"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white transition-transform motion-safe:active:scale-95 disabled:opacity-50"
                aria-label="Send message"
                disabled={pending || draft.trim().length === 0}
              >
                <Send className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <p className="mt-2 text-[11px] leading-4 text-muted">
              Generated answers can be incomplete. For a walkthrough, use Contact.
            </p>
          </form>
        </section>
      ) : null}

      <div className={cn("chat-launcher-anchor", !open && "is-idle")}>
        <div className="chat-launcher-bob flex flex-col items-end gap-3">
          {!open && teaser ? (
            <div className="chat-teaser pointer-events-auto relative max-w-64 rounded-2xl border border-border bg-white px-3 py-2.5 pr-8 text-left shadow-md">
              <button
                type="button"
                className="block text-left"
                onClick={() => setOpen(true)}
              >
                <span className="block text-sm font-semibold text-foreground">
                  Questions about your store?
                </span>
                <span className="mt-0.5 block text-xs leading-5 font-normal text-muted">
                  Ask about checkout, inventory, or how to reach the team.
                </span>
              </button>
              <button
                type="button"
                className="absolute top-1.5 right-1.5 rounded-md p-1 text-muted hover:bg-surface hover:text-foreground"
                aria-label="Dismiss greeting"
                onClick={() => {
                  teaserDismissed.current = true;
                  setTeaser(false);
                }}
              >
                <X className="h-3.5 w-3.5" aria-hidden />
              </button>
              <span className="chat-teaser-tail" aria-hidden />
            </div>
          ) : null}

          <button
            ref={launcherRef}
            type="button"
            className="chat-launcher pointer-events-auto relative inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-3 text-sm font-semibold text-white shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="relative grid h-5 w-5 place-items-center" aria-hidden>
              <MessageCircle
                className={cn("chat-glyph col-start-1 row-start-1 h-5 w-5", open && "is-hidden")}
              />
              <X
                className={cn("chat-glyph col-start-1 row-start-1 h-5 w-5", !open && "is-hidden")}
              />
            </span>
            <span key={open ? "close" : "ask"} className="chat-launcher-label">
              {open ? "Close chat" : "Ask AlliancePay"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
