import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  return (
    <a className={`button button--${variant}`} href={href}>
      <span>{children}</span><ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

