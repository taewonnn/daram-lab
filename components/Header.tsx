"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

const navItems = [
  { label: "Apps", href: "/apps" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <Container className="flex items-center justify-between h-16">
        <Link href="/" className="text-lg font-semibold tracking-tight text-primary">
          DaramLab
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-sub hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="메뉴 열기"
        >
          <span className="block w-5 h-px bg-primary" />
          <span className="block w-5 h-px bg-primary" />
          <span className="block w-5 h-px bg-primary" />
        </button>
      </Container>

      {menuOpen && (
        <div className="md:hidden border-t border-border">
          <Container className="py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-sub hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
