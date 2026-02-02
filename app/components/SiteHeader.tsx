import Link from "next/link";

type SiteHeaderProps = {
  variant?: "transparent" | "solid";
};

export default function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  const baseClasses =
    variant === "transparent"
      ? "bg-black/40 backdrop-blur"
      : "bg-[#05070b]";

  return (
    <header className={`sticky top-0 z-40 border-b border-white/5 ${baseClasses}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold tracking-[0.2em] text-white"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
          Aurora Audio
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          <Link className="transition hover:text-cyan-200" href="/collection">
            Collection
          </Link>
          <Link className="transition hover:text-cyan-200" href="/pricing">
            Pricing
          </Link>
          <Link className="transition hover:text-cyan-200" href="/about">
            About
          </Link>
          <Link className="transition hover:text-cyan-200" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
