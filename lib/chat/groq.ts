export const GROQ_BASE_URL = "https://api.groq.com/openai/v1";
export const DEFAULT_GROQ_MODEL = "openai/gpt-oss-120b";

export function getGroqSettings() {
  const apiKey = process.env.GROQ_API_KEY?.trim() ?? "";
  const model = process.env.GROQ_MODEL?.trim() || DEFAULT_GROQ_MODEL;
  return {
    apiKey,
    model,
    baseURL: GROQ_BASE_URL,
    configured: apiKey.length > 0,
  };
}
