export default function Testimonials() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Section Title */}
        <h2
          className="text-3xl font-bold mb-10"
          style={{ color: "var(--color-primary)" }}
        >
          What Drivers Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Testimonial */}
          <div
            className="p-6 rounded-xl border"
            style={{
              backgroundColor: "var(--color-white)",
              borderColor: "var(--color-secondary)",
            }}
          >
            <p style={{ color: "var(--color-border)" }}>
              “Best dispatch service I’ve ever used — loads are consistent and
              pay great.”
            </p>
            <h3
              className="mt-4 font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              J. Martinez
            </h3>
          </div>

          {/* Testimonial */}
          <div
            className="p-6 rounded-xl border"
            style={{
              backgroundColor: "var(--color-white)",
              borderColor: "var(--color-secondary)",
            }}
          >
            <p style={{ color: "var(--color-border)" }}>
              “These guys negotiate better than anyone. My revenue jumped
              immediately.”
            </p>
            <h3
              className="mt-4 font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              A. Brown
            </h3>
          </div>

          {/* Testimonial */}
          <div
            className="p-6 rounded-xl border"
            style={{
              backgroundColor: "var(--color-white)",
              borderColor: "var(--color-secondary)",
            }}
          >
            <p style={{ color: "var(--color-border)" }}>
              “24/7 support is real — they always help no matter the time of
              day.”
            </p>
            <h3
              className="mt-4 font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              D. Williams
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}