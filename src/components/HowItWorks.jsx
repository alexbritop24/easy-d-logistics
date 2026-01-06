// src/components/HowItWorks.jsx
export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1",
      title: "Sign Up",
      desc: "Fill out the quick onboarding form.",
    },
    {
      step: "Step 2",
      title: "We Find Loads",
      desc: "We negotiate and book the best paying freight.",
    },
    {
      step: "Step 3",
      title: "You Drive",
      desc: "You haul — we handle everything else.",
    },
  ];

  return (
    <section className="bg-[var(--color-primary)] text-white py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {steps.map((s) => (
            <div
              key={s.title}
              className="
                p-6 md:p-8
                bg-[var(--color-primary-softer)]
                rounded-2xl
                border border-white/15
                transition
                hover:border-[var(--color-accent)]
              "
            >
              <div className="mx-auto mb-4 w-fit px-3 py-1 rounded-full text-sm font-semibold border border-white/15 text-white/80">
                {s.step}
              </div>

              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-white/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}