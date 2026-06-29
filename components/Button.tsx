import type { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-[#333]",
  secondary: "bg-white text-primary border border-border hover:bg-[#f5f5f5]",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center px-6 py-3 rounded-[12px] text-sm font-medium transition-colors ${variantStyles[variant]} ${className}`;

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    ) : (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
}
