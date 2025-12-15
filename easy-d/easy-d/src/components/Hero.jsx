export default function Hero() {
  return (
    <section
      className="pt-32 pb-24 text-white"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-7xl mx-auto text-center px-6">

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Professional Dispatching for{" "}
          <span style={{ color: "var(--color-secondary)" }}>
            Owner Operators & Small Fleets
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="mt-6 text-lg max-w-3xl mx-auto"
          style={{ color: "var(--color-muted)" }}
        >
          Keep your trucks loaded, earn more per mile, and eliminate paperwork
          stress. We handle everything so you can stay focused on driving.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="/get-started"
            className="px-8 py-3 font-semibold rounded-lg transition"
            style={{
              backgroundColor: "var(--color-secondary)",
              color: "var(--color-primary)",
            }}
          >
            Start Dispatching Today
          </a>

          <a
            href="/services"
            className="px-8 py-3 rounded-lg transition"
            style={{
              border: "1px solid var(--color-secondary)",
              color: "var(--color-secondary)",
            }}
          >
            View Services
          </a>

        </div>

      </div>
    </section>
  );
}