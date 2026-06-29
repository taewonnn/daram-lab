import Link from "next/link";
import Container from "./Container";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap justify-center md:justify-start gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-sub hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-sub">© 2026 DaramLab</p>
        </div>
      </Container>
    </footer>
  );
}
