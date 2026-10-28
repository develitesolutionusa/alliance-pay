import type { SVGProps } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

function SocialIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className="h-4 w-4"
      {...props}
    />
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: (
      <SocialIcon>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0z" />
      </SocialIcon>
    ),
  },
  {
    label: "X",
    href: siteConfig.social.x,
    icon: (
      <SocialIcon>
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-4.71-6.23-5.4 6.23H2.74l7.73-8.84L1.25 2.25h6.83l4.25 5.62 5.91-5.62zm-1.16 17.52h1.83L7.08 4.13H5.12l12 15.64z" />
      </SocialIcon>
    ),
  },
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: (
      <SocialIcon>
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.96h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07z" />
      </SocialIcon>
    ),
  },
] as const;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { title: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href + link.title}>
            <Link
              href={link.href}
              className="text-sm text-muted transition duration-300 hover:text-primary hover:drop-shadow-[0_0_12px_rgb(18_99_241_/_0.7)] focus-visible:text-primary focus-visible:outline-none focus-visible:drop-shadow-[0_0_12px_rgb(18_99_241_/_0.7)]"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,0.8fr)_minmax(0,1.15fr)_minmax(0,0.75fr)_minmax(0,0.8fr)_minmax(0,0.7fr)]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="footer" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-sm text-muted">
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="font-medium text-primary transition duration-300 hover:text-[#3d93ff] hover:drop-shadow-[0_0_12px_rgb(61_147_255_/_0.85)] focus-visible:text-[#3d93ff] focus-visible:outline-none focus-visible:drop-shadow-[0_0_12px_rgb(61_147_255_/_0.85)]"
              >
                {siteConfig.supportEmail}
              </a>
            </p>
            <ul className="mt-5 flex items-center gap-2" aria-label="Social">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted transition duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_18px_rgb(18_99_241_/_0.55)] focus-visible:border-primary focus-visible:text-primary focus-visible:shadow-[0_0_18px_rgb(18_99_241_/_0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <FooterColumn title="Product" links={footerNav.product} />
          <FooterColumn title="Industries" links={footerNav.industries} />
          <FooterColumn title="Features" links={footerNav.features} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Resources" links={footerNav.resources} />
          <FooterColumn title="Legal" links={footerNav.legal} />
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
