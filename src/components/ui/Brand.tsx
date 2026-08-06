import Link from "next/link";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`brand ${compact ? "brand--compact" : ""}`} href="#home" aria-label="TactiqoAI home">
      <span>TACTIQO</span><span className="brand__ai">AI</span>
    </Link>
  );
}

