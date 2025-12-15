export default function CTABanner() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-6xl mx-auto text-center px-6">

        {/* Heading */}
        <h2
          className="text-3xl font-bold"
          style={{ color: "var(--color-white)" }}
        >
          Ready To Maximize Your Earnings?
        </h2>

        {/* Subtext */}
        <p
          className="mt-4"
          style={{ color: "var(--color-muted)" }}
        >
          Join Easy D Logistics and get premium dispatching — without the stress.
        </p>

        {/* CTA Button */}
        <a
          href="/get-started"
          className="inline-block mt-8 px-10 py-3 font-semibold rounded-lg transition"
          style={{
            backgroundColor: "var(--color-secondary)",
            color: "var(--color-primary)",
          }}
        >
          Get Started Now
        </a>

      </div>
    </section>
  );
}