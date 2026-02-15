"use client";

import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import {
  FadeIn,
  MotionDiv,
  MotionSection,
  Stagger,
  auroraEase,
  staggerItem,
} from "./components/Motion";
import { products } from "./data/products";
import { withBasePath } from "./lib/paths";
import ProductCard from "./components/ProductCard";

const featuredModels = products.slice(0, 3);


const testimonials = [
  {
    quote:
      "The most luminous headphone experience we have ever tested — a true luxury statement.",
    source: "Sound & Vision",
  },
  {
    quote:
      "Every detail feels intentional, from the comfort to the aurora-inspired acoustics.",
    source: "Hi-Fi Review",
  },
  {
    quote:
      "A balanced, elegant sound that rivals studio monitors.",
    source: "Audio Collective",
  },
];

export default function Home() {
  return (
    <div className="bg-transparent text-white">
      <SiteHeader variant="transparent" />

      <main>
        <MotionSection
          className="relative overflow-hidden px-6 pb-24 pt-20"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: auroraEase }}
        >
          <div className="absolute inset-0 z-[0]">
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute inset-x-0 top-12 h-[520px] bg-gradient-to-b from-black/45 via-black/35 to-black/20" />
            <div className="absolute -top-24 left-1/2 h-80 w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(54,194,255,0.24),transparent_65%)]" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(138,77,255,0.3),transparent_65%)]" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center">
            <div
              aria-hidden
              style={{
                backgroundImage: `url(${withBasePath("/aurorasoundwavelogo.png")})`,
              }}
              className="h-[900px] w-[210%] translate-y-8 bg-repeat-x bg-[center_18%] bg-contain opacity-70 brightness-110 blur-[1px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_100%)]"
            />
          </div>
          <div className="relative z-[2] mx-auto flex w-full max-w-6xl flex-col items-center gap-12 text-center">
            <FadeIn className="relative flex flex-col items-center gap-6">
              <h1 className="relative z-10 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Aurora Audio
              </h1>
              <p className="relative z-10 max-w-xl text-base text-slate-100/90 sm:text-lg">
                Hear the light. Feel the sound.
              </p>
              <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                50mm drivers • 38 hrs battery • Hi-Res
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/collections"
                  className="aurora-glow rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/30"
                >
                  Explore Collection
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:text-white"
                >
                  Our Story
                </Link>
              </div>
              <ul className="mt-2 flex flex-wrap items-center justify-center gap-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/70">
                <li>Studio-tuned</li>
                <li>Spatial clarity</li>
                <li>Ultra-comfort fit</li>
              </ul>
              <div className="mt-4 flex w-full items-center justify-center">
                <div className="relative h-32 w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
                  <Image
                    src={withBasePath("/productbanner.png")}
                    alt="Aurora Audio product banner"
                    fill
                    className="object-cover object-center scale-110"
                    sizes="(max-width: 768px) 90vw, 576px"
                  />
                </div>
              </div>
            </FadeIn>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: auroraEase }}
              className="relative z-10 mx-auto flex w-full max-w-2xl items-center justify-center"
            >
              <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-[#05070b] shadow-[0_25px_60px_rgba(0,0,0,0.45)]" />
              <div className="relative z-10 w-full space-y-4 px-6 py-6">
                <div className="aurora-sheen shimmer rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  Aurora Waveform
                </div>
                <div className="space-y-3">
                  <div className="wave-line aurora-wave h-2 w-full rounded-full" />
                  <div className="wave-line aurora-wave h-2 w-11/12 rounded-full" />
                  <div className="wave-line aurora-wave h-2 w-10/12 rounded-full" />
                  <div className="wave-line aurora-wave h-2 w-8/12 rounded-full opacity-70" />
                </div>
                <p className="text-xs text-slate-100/80">
                  Subtle aurora-inspired motion mirrors real-time audio energy.
                </p>
              </div>
            </MotionDiv>

            <FadeIn className="relative z-10 w-full max-w-4xl rounded-[36px] border border-white/10 bg-[#05070b] p-8 text-left shadow-[0_25px_60px_rgba(0,0,0,0.45)] md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/70">
                    Ready to listen
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                    Begin your aurora journey.
                  </h2>
                  <p className="mt-3 text-sm text-slate-200/80">
                    Discover premium headphones engineered for luminous clarity.
                  </p>
                </div>
                <Link
                  href="/collections"
                  className="aurora-glow rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
                >
                  Explore Collection
                </Link>
              </div>
            </FadeIn>

            <FadeIn className="relative z-10 grid w-full gap-8 rounded-[32px] border border-white/10 bg-[#05070b] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)] md:grid-cols-3">
              <div className="text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                  Crafted for
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Studio-level fidelity in every environment.
                </h2>
              </div>
              <p className="text-left text-sm text-slate-200/80 md:col-span-2">
                Aurora Audio blends meticulous acoustic engineering with aurora-inspired
                visual identity. Each headphone is precision-tuned for accuracy, comfort,
                and the luminous detail professionals demand.
              </p>
            </FadeIn>
          </div>
        </MotionSection>

        <MotionSection
          className="px-6 py-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: auroraEase }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-12">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/70">
                  Featured
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  Signature headphone models.
                </h2>
              </div>
              <Link
                href="/collection"
                className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Explore all
              </Link>
            </div>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: auroraEase }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute inset-0 opacity-0 transition hover:opacity-100">
                <div className="aurora-sheen h-full w-full" />
              </div>
              <div className="relative z-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative h-40 overflow-hidden rounded-2xl border border-white/10 sm:h-48">
                  <Image
                    src={withBasePath("/headphones.png")}
                    alt="Aurora Audio headphones"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                    Featured design
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    Aurora Signature Build
                  </h3>
                  <p className="text-sm text-slate-200/80">
                    Sculpted earcups, lightweight alloy frame, and aurora-fade finishes
                    that mirror the clarity inside.
                  </p>
                </div>
              </div>
            </MotionDiv>

            <Stagger className="grid gap-6 md:grid-cols-3">
              {featuredModels.map((model, index) => (
                <ProductCard key={model.slug} product={model} index={index} />
              ))}
            </Stagger>
          </div>
        </MotionSection>

        <MotionSection
          className="px-6 py-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: auroraEase }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <FadeIn className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/70">
                Story
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Designed to glow, tuned to perform.
              </h2>
              <p className="text-sm text-slate-200/80">
                We obsess over every decibel, sculpting sound that feels effortless.
                Aurora Audio pairs premium materials with subtle aurora gradients to
                reflect the clarity inside.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200"
              >
                Our mission
                <span aria-hidden>→</span>
              </a>
            </FadeIn>
            <FadeIn className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { label: "Drivers", value: "50mm" },
                  { label: "Battery", value: "38 hrs" },
                  { label: "Latency", value: "Ultra-low" },
                  { label: "Materials", value: "Alcantara" },
                  { label: "Codec", value: "Hi-Res" },
                  { label: "Tuning", value: "Studio" },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {stat.label}
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </MotionSection>

        <MotionSection
          className="px-6 py-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: auroraEase }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto max-w-6xl">
            <FadeIn className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/70">
                  Press
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  Trusted by listeners worldwide.
                </h2>
              </div>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Contact us
              </Link>
            </FadeIn>
            <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <MotionDiv
                  key={item.source}
                  variants={staggerItem}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm text-slate-200/85">“{item.quote}”</p>
                  <p className="mt-5 text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                    {item.source}
                  </p>
                </MotionDiv>
              ))}
            </Stagger>
          </div>
        </MotionSection>

      </main>
    </div>
  );
}
