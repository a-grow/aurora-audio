import SiteHeader from "../components/SiteHeader";

const tiers = [
  {
    name: "Standard",
    price: "$349",
    description: "Essential aurora sound with everyday comfort.",
    features: [
      "Hybrid ANC",
      "30-hour battery",
      "Aurora EQ presets",
      "Premium travel case",
    ],
  },
  {
    name: "Pro",
    price: "$499",
    description: "Flagship clarity with spatial tuning and luxe materials.",
    features: [
      "Adaptive spatial audio",
      "38-hour battery",
      "Aluminum + Alcantara",
      "Wireless/USB-C lossless",
    ],
    highlight: true,
  },
  {
    name: "Studio",
    price: "$699",
    description: "Reference-grade detail for creators and audiophiles.",
    features: [
      "Open-back drivers",
      "Reference DAC mode",
      "Studio calibration",
      "Lifetime tuning support",
    ],
  },
];

const comparison = [
  {
    label: "Spatial Audio",
    values: ["Included", "Advanced", "Advanced"],
  },
  {
    label: "Battery Life",
    values: ["30 hrs", "38 hrs", "36 hrs"],
  },
  {
    label: "Materials",
    values: ["Vegan leather", "Alcantara", "Alcantara + magnesium"],
  },
  {
    label: "Studio Calibration",
    values: ["Optional", "Included", "Included"],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="aurora-bg" aria-hidden />
      <div className="aurora-logo-bg" aria-hidden />
      <div className="aurora-content">
        <SiteHeader />
        <section className="px-6 pb-20 pt-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-12">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/70">
                Pricing
              </p>
              <h1 className="text-4xl font-semibold text-white">
                Choose your aurora tier.
              </h1>
              <p className="max-w-2xl text-sm text-slate-200/80">
                Transparent pricing with premium features at every level.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative overflow-hidden rounded-3xl border border-white/10 p-6 ${
                    tier.highlight ? "aurora-sheen" : "bg-white/5"
                  }`}
                >
                  {tier.highlight ? (
                    <span className="absolute right-4 top-4 rounded-full border border-white/30 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white">
                      Most popular
                    </span>
                  ) : null}
                  <div className="relative z-10 space-y-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-200">
                      {tier.name}
                    </p>
                    <h2 className="text-3xl font-semibold text-white">{tier.price}</h2>
                    <p className="text-sm text-slate-100/80">{tier.description}</p>
                    <ul className="space-y-2 text-sm text-slate-100/80">
                      {tier.features.map((feature, index) => (
                        <li
                          key={`${tier.name}-${feature}-${index}`}
                          className="flex items-center gap-2"
                        >
                          <span className="h-2 w-2 rounded-full bg-cyan-300/80" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full rounded-full bg-white/15 py-3 text-sm font-semibold text-white transition hover:bg-white/25">
                      Select {tier.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Comparison
              </p>
              <div className="mt-6 grid gap-4">
                {comparison.map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-4 border-b border-white/10 pb-4 text-sm text-slate-200/80 md:grid-cols-[1fr_repeat(3,0.6fr)]"
                  >
                    <span className="text-slate-200">{row.label}</span>
                    {row.values.map((value, index) => (
                      <span key={`${row.label}-${value}-${index}`} className="text-white">
                        {value}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
