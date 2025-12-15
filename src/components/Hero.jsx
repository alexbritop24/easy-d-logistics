export default function Hero() {
  return (
    <section className="pt-36 pb-24 bg-[var(--color-primary)] text-white">
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
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

          {/* Primary CTA */}
          <a
            href="/get-started"
            className="
              px-8 py-3
              bg-[var(--color-accent)]
              text-[var(--color-primary)]
              font-semibold
              rounded-lg
              transition
              hover:opacity-90
            "
          >
            Start Dispatching Today
          </a>

          {/* Secondary CTA */}
          <a
            href="/services"
            className="
              px-8 py-3
              border border-white/30
              rounded-lg
              text-white
              transition
              hover:border-[var(--color-accent)]
              hover:text-[var(--color-accent)]
            "
          >
            View Services
          </a>

        </div>

      </div>
    </section>
  );
}