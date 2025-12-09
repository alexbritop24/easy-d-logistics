export default function TrustBadges() {
  return (
    <section className="py-16 bg-[var(--color-primary-softer)] text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6">

        <div className="p-6 border border-[var(--color-accent)] rounded-xl">
          <h3 className="text-xl font-bold">24/7 Dispatching</h3>
          <p className="text-gray-300 mt-2">Always available, every mile of the way.</p>
        </div>

        <div className="p-6 border border-[var(--color-accent)] rounded-xl">
          <h3 className="text-xl font-bold">Paperwork & Compliance</h3>
          <p className="text-gray-300 mt-2">We handle all broker + load paperwork.</p>
        </div>

        <div className="p-6 border border-[var(--color-accent)] rounded-xl">
          <h3 className="text-xl font-bold">Top Paying Loads</h3>
          <p className="text-gray-300 mt-2">Expert negotiation for highest RPM.</p>
        </div>

      </div>
    </section>
  );
}