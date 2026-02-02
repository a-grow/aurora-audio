"use client";

import Image from "next/image";
import { useState } from "react";
import { MotionDiv, auroraEase } from "./Motion";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-6">
      <MotionDiv
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: auroraEase }}
        className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-6"
      >
        <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 sm:h-96">
          <Image
            src={images[active]}
            alt={`${name} visual ${active + 1}`}
            fill
            className="object-cover"
          />
        </div>
      </MotionDiv>
      <div className="grid gap-4 sm:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className={`relative h-24 overflow-hidden rounded-2xl border transition sm:h-28 ${
              index === active
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
    </div>
  );
}
