import SiteHeader from "../components/SiteHeader";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="aurora-bg" aria-hidden />
      <div className="aurora-logo-bg" aria-hidden />
      <div className="aurora-content">
        <SiteHeader />
        <section className="px-6 pb-20 pt-16">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/70">
                About
              </p>
              <h1 className="text-4xl font-semibold text-white">
                We craft luminous sound experiences.
              </h1>
              <p className="text-sm text-slate-200/80">
                Aurora Audio was born from a desire to blend modern acoustic
                engineering with the serenity of aurora light. Our mission is to
                deliver premium listening tools that feel effortless, elegant, and
                deeply immersive.
              </p>
              <p className="text-sm text-slate-200/80">
                From our materials to our tuning philosophy, every detail is
                engineered for clarity, comfort, and emotional impact.
              </p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 px-6 py-10 text-center text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  Aurora Visuals
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">
                    Brand pillars
                  </h2>
                  <ul className="space-y-2 text-sm text-slate-200/80">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-300/80" />
                      Precision engineering
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-300/80" />
                      Timeless minimalism
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-300/80" />
                      Aurora-inspired craft
                    </li>
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
