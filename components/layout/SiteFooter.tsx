import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

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
              className="text-sm text-muted transition-colors hover:text-foreground"
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
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-sm text-muted">
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="font-medium text-primary hover:text-primary-hover"
              >
                {siteConfig.supportEmail}
              </a>
            </p>
          </div>
          <FooterColumn title="Product" links={footerNav.product} />
          <FooterColumn title="Industries" links={footerNav.industries} />
          <FooterColumn title="Company" links={footerNav.company} />
          <div className="space-y-8">
            <FooterColumn title="Resources" links={footerNav.resources} />
            <FooterColumn title="Legal" links={footerNav.legal} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a
                href={siteConfig.social.linkedin}
                className="hover:text-foreground"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.twitter}
                className="hover:text-foreground"
                rel="noopener noreferrer"
                target="_blank"
              >
                X
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.facebook}
                className="hover:text-foreground"
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
