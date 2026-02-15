"use client";

import Image from "next/image";
import { useState } from "react";
import { MotionDiv, auroraEase } from "./Motion";
import { Product } from "../data/products";

export default function ProductGallery({
  product,
}: {
  product: Product;
}) {
  const images = product.images;
  const name = product.name;
  const [active, setActive] = useState(0);

  const isNebula = product.slug === "aurora-nebula";
  const isBorealis = product.slug === "aurora-borealis";
  const isPulse = product.slug === "aurora-pulse";
  const isTarget = isNebula || isBorealis || isPulse;

  const glowClass = isNebula ? "glow-nebula" : isBorealis ? "glow-borealis" : isPulse ? "glow-pulse" : "";
  const gradientClass = isNebula ? "gradient-nebula" : isBorealis ? "gradient-borealis" : isPulse ? "gradient-pulse" : "";

  return (
    <div className={isTarget ? "" : "space-y-6"}>
      <MotionDiv
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: auroraEase }}
        className={`relative overflow-hidden border border-white/10 ${isTarget
          ? `rounded-[32px] p-6 ${gradientClass}`
          : "rounded-3xl bg-black/40"
          }`}
      >
        {isTarget && <div className={`absolute inset-0 opacity-40 ${glowClass}`} aria-hidden />}

        <div className={`relative w-full overflow-hidden border border-white/10 ${isTarget
          ? "aspect-[1.875] rounded-2xl bg-black/40"
          : "h-72 sm:h-96 rounded-3xl bg-black/20"
          }`}>
          <Image
            src={images[active]}
            alt={`${name} visual ${active + 1}`}
            fill
            className={isTarget ? "object-contain p-8 rounded-2xl" : "object-cover"}
          />
        </div>
      </MotionDiv>
      {!isTarget && (
        <div className="grid gap-4 sm:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              className={`relative overflow-hidden rounded-2xl border transition ${isTarget ? "aspect-[16/10]" : "h-24 sm:h-28"} ${index === active
                ? "border-cyan-200/60"
                : "border-white/10 hover:border-white/30"
                }`}
            >
              <Image
                src={image}
                alt={`${name} preview ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
