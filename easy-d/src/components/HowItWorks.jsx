export default function HowItWorks() {
  const steps = [
    {
      title: "1. Sign Up & Share Your Details",
      description:
        "Tell us about your equipment, preferred lanes, and weekly revenue goals.",
    },
    {
      title: "2. We Find & Negotiate Your Loads",
      description:
        "Your dispatcher handles load search, rate negotiation, and paperwork.",
    },
    {
      title: "3. You Approve & Hit the Road",
      description:
        "You always approve the load. We keep you moving with profitable freight.",
    },
  ];

  return (
    <section className="bg-primary-light py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="p-6 rounded-xl bg-primary border border-slate-700"
            >
              <h3 className="text-xl font-semibold text-accent mb-2">
                {step.title}
              </h3>
              <p className="text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}