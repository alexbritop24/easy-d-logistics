export default function HowItWorks() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-6xl mx-auto text-center px-6">

        {/* Section Title */}
        <h2
          className="text-3xl font-bold mb-10"
          style={{ color: "var(--color-white)" }}
        >
          How It Works
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Step */}
          <div
            className="p-6 rounded-xl border"
            style={{
              backgroundColor: "var(--color-bg)",
              borderColor: "var(--color-secondary)",
            }}
          >
            <h3
              className="text-xl font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              1. Sign Up
            </h3>
            <p
              className="mt-2"
              style={{ color: "var(--color-border)" }}
            >
              Fill out the quick onboarding form.
            </p>
          </div>

          {/* Step */}
          <div
            className="p-6 rounded-xl border"
            style={{
              backgroundColor: "var(--color-bg)",
              borderColor: "var(--color-secondary)",
            }}
          >
            <h3
              className="text-xl font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              2. We Find Loads
            </h3>
            <p
              className="mt-2"
              style={{ color: "var(--color-border)" }}
            >
              We negotiate and book the best paying freight.
            </p>
          </div>

          {/* Step */}
          <div
            className="p-6 rounded-xl border"
            style={{
              backgroundColor: "var(--color-bg)",
              borderColor: "var(--color-secondary)",
            }}
          >
            <h3
              className="text-xl font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              3. You Drive
            </h3>
            <p
              className="mt-2"
              style={{ color: "var(--color-border)" }}
            >
              You haul — we handle everything else.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}