import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import ProductGallery from "../../components/ProductGallery";
import { products } from "../../data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="aurora-bg" aria-hidden />
      <div className="aurora-logo-bg" aria-hidden />
      <div className="aurora-content">
        <SiteHeader />
        <section className="px-6 pb-20 pt-16">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/collection"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/70"
            >
              ← Back to collection
            </Link>

            <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <ProductGallery product={product} />

              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/70">
                    {product.name}
                  </p>
                  <h1 className="mt-4 text-4xl font-semibold text-white">
                    {product.description}
                  </h1>
                  <p className="mt-4 text-sm text-slate-200/80">
                    Experience aurora-inspired acoustics, tuned for clarity and precision.
                    Every detail is engineered for immersive listening.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">
                      {product.price}
                    </span>
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {product.tier} tier
                    </span>
                  </div>
                  <button className="mt-6 w-full rounded-full bg-white/15 py-3 text-sm font-semibold text-white transition hover:bg-white/25">
                    Add to Cart
                  </button>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Specs
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-200/80">
                    {product.highlights.map((highlight, index) => (
                      <li key={`${product.slug}-${highlight}-${index}`} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-cyan-300/70" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
