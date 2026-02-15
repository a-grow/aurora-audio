"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionDiv, staggerItem } from "./Motion";
import { Product } from "../data/products";

interface ProductCardProps {
    product: Product;
    index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
    const isNebula = product.slug === "aurora-nebula";
    const isBorealis = product.slug === "aurora-borealis";
    const isPulse = product.slug === "aurora-pulse";

    const glowClass = isNebula ? "glow-nebula" : isBorealis ? "glow-borealis" : isPulse ? "glow-pulse" : "";
    const gradientClass = isNebula ? "gradient-nebula" : isBorealis ? "gradient-borealis" : isPulse ? "gradient-pulse" : "";

    return (
        <MotionDiv
            variants={staggerItem}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 product-card-lift animate-gradient-shift ${gradientClass}`}
        >
            {/* Background Glow Overlay */}
            <div className={`absolute inset-0 opacity-0 transition group-hover:opacity-100 ${glowClass} glow-intensify`} aria-hidden />

            {/* Aurora Sheen Overlay */}
            <div className="absolute inset-0 opacity-0 transition group-hover:opacity-10" aria-hidden>
                <div className="aurora-sheen h-full w-full" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                <div className="relative aspect-[1.875] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Text Reveal Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="text-lg font-bold tracking-wider text-white px-4 text-center">
                            {product.name}
                        </span>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-cyan-200">
                        {product.name}
                    </h3>
                    <p className="text-sm text-slate-200/80 line-clamp-2">
                        {product.shortDescription}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-semibold text-white">
                        {product.price}
                    </span>
                    <Link
                        href={`/products/${product.slug}`}
                        className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition-all px-4 py-2 rounded-full border border-cyan-200/30 button-glow hover:text-white"
                    >
                        View details
                    </Link>
                </div>
            </div>
        </MotionDiv>
    );
}
