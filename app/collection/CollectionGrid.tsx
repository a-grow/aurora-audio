"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "../data/products";
import { MotionDiv, Stagger, auroraEase, staggerItem } from "../components/Motion";

export default function CollectionGrid({ products }: { products: Product[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const activeProduct = useMemo(
    () => products.find((product) => product.slug === activeSlug) ?? null,
    [activeSlug, products]
  );

  return (
    <>
      <Stagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <MotionDiv
            key={product.slug}
            variants={staggerItem}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="aurora-sheen h-full w-full" />
            </div>
            <div className="relative z-10 flex h-full flex-col gap-6">
              <div className="relative h-36 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {product.tier}
                </p>
                <h2 className="text-xl font-semibold text-white">
                  {product.name}
                </h2>
                <p className="text-sm text-slate-200/80">
                  {product.shortDescription}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-semibold text-white">
                  {product.price}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveSlug(product.slug)}
                    className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition group-hover:text-white"
                  >
                    Quick view
                  </button>
                  <Link
                    href={`/products/${product.slug}`}
                    className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </MotionDiv>
        ))}
      </Stagger>

      {activeProduct ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 py-10 backdrop-blur">
          <MotionDiv
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: auroraEase }}
            className="relative w-full max-w-3xl rounded-[32px] border border-white/10 bg-[#0b0f1b] p-8"
          >
            <button
              type="button"
              onClick={() => setActiveSlug(null)}
              className="absolute right-6 top-6 text-xs uppercase tracking-[0.3em] text-slate-400 transition hover:text-white"
            >
              Close
            </button>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative h-56 overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={activeProduct.images[0]}
                  alt={activeProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                  {activeProduct.tier} Tier
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {activeProduct.name}
                </h3>
                <p className="text-sm text-slate-200/80">
                  {activeProduct.description}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-slate-300">
                  {activeProduct.highlights.map((highlight, index) => (
                    <span
                      key={`${activeProduct.slug}-${highlight}-${index}`}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-semibold text-white">
                    {activeProduct.price}
                  </span>
                  <Link
                    href={`/products/${activeProduct.slug}`}
                    className="rounded-full bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/25"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      ) : null}
    </>
  );
}
