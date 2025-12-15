export default function Testimonials() {
  return (
    <section className="py-24 bg-[var(--color-primary)] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          What Drivers Say
        </h2>

        <p className="text-white/70 mb-12 max-w-2xl mx-auto">
          Real feedback from owner-operators and fleet managers we work with daily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {[
            {
              quote:
                "Best dispatch service I’ve ever used — loads are consistent and pay great.",
              name: "J. Martinez",
            },
            {
              quote:
                "These guys negotiate better than anyone. My revenue jumped immediately.",
              name: "A. Brown",
            },
            {
              quote:
                "24/7 support is real — they always help no matter the time of day.",
              name: "D. Williams",
            },
          ].map(({ quote, name }) => (
            <div
              key={name}
              className="
                p-8
                bg-[var(--color-primary-softer)]
                rounded-xl
                border
                border-white/15
                transition
                hover:border-[var(--color-accent)]
              "
            >
              <p className="text-white/80 leading-relaxed">
                “{quote}”
              </p>

              <h3 className="mt-6 font-semibold text-[var(--color-accent)]">
                {name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}