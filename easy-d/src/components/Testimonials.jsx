export default function Testimonials() {
  const testimonials = [
    {
      name: "Marcus T. — Owner Operator",
      quote:
        "Easy D Logistics changed my entire business. I’m running better loads, making more per week, and I no longer stress about paperwork.",
    },
    {
      name: "Sarah K. — Box Truck Carrier",
      quote:
        "Reliable dispatchers, always available! They negotiate amazing rates and keep me moving every single day.",
    },
    {
      name: "Derrick J. — Small Fleet (3 Trucks)",
      quote:
        "Our fleet saw a huge jump in weekly revenue. They handle dispatching, compliance, documents — everything.",
    },
  ];

  return (
    <section className="bg-primary py-16 px-6 border-t border-slate-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          What Drivers Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-primary-light border border-slate-700"
            >
              <p className="text-slate-300 italic mb-4">"{t.quote}"</p>
              <p className="text-accent font-semibold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}