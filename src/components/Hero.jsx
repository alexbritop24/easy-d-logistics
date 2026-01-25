// src/components/Hero.jsx
import heroBg from "../assets/warehouse-aerial-1.jpeg";

export default function Hero() {
  return (
    <section
      className="relative pt-36 pb-24 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[var(--color-primary)]/75" />

      {/* Subtle gradient to keep top nav area clean */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      <div className="relative max-w-6xl mx-auto text-center px-6">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Dispatching Solutions{" "}
          <span className="block text-[var(--color-accent)]">
            That Scales With Your Fleet
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
          From owner operators to large trucking fleets, we handle dispatching,
          rates, and paperwork so you can focus on the road
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          {/* Primary CTA */}
          <a
            href="/contact"
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
            Talk to a Dispatcher
          </a>

          {/* Secondary CTA */}
          <a
            href="/services"
            className="
              px-8 py-3
              border border-white/40
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