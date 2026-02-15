import SiteHeader from "../components/SiteHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="aurora-bg" aria-hidden />
      <div className="aurora-logo-bg" aria-hidden />
      <div className="aurora-content">
        <SiteHeader />
        <section className="px-6 pb-20 pt-16">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/70">
                Contact
              </p>
              <h1 className="text-4xl font-semibold text-white">
                Contact Us
              </h1>
              <p className="text-sm text-slate-200/80">
                We’d love to hear from you. Please reach out with any questions or feedback.
              </p>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200/80">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Concierge
                </p>
                <p className="mt-4">support@aurora-audio.com</p>
                <p className="mt-2">+1 (415) 555-0148</p>
              </div>
            </div>

            <form className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  placeholder="you@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-white/15 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
