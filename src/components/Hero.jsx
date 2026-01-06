export default function Hero() {
  return (
    <section className="bg-[var(--color-primary)] text-white pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="max-w-6xl mx-auto text-center px-6">

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Professional Dispatching for{" "}
          <span className="block text-[var(--color-accent)]">
            Owner Operators & Small Fleets
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Keep your trucks loaded, earn more per mile, and eliminate paperwork stress.
          We handle everything so you can stay focused on driving.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/get-started"
            className="px-8 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg hover:opacity-90 transition"
          >
            Start Dispatching Today
          </a>

          <a
            href="/services"
            className="px-8 py-3 border border-white/30 rounded-lg text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
          >
            View Services
          </a>
        </div>

      </div>
    </section>
  );
}