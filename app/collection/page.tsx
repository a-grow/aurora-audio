import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import CollectionGrid from "./CollectionGrid";
import { products } from "../data/products";

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="aurora-bg" aria-hidden />
      <div className="aurora-logo-bg" aria-hidden />
      <div className="aurora-content">
        <SiteHeader />
        <section className="px-6 pb-20 pt-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/70">
                Collection
              </p>
              <h1 className="text-4xl font-semibold text-white">
                Explore the aurora lineup.
              </h1>
              <p className="max-w-2xl text-sm text-slate-200/80">
                Every model is tuned for luminous clarity and crafted with premium
                materials. Hover to reveal aurora gradients and quick-view details.
              </p>
              </div>
              <div className="relative h-52 overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:h-60">
                <Image
                  src="/headphones.png"
                  alt="Aurora Audio headphones"
                  fill
                  className="object-cover object-center scale-110"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <CollectionGrid products={products} />
          </div>
        </section>
      </div>
    </div>
  );
}
