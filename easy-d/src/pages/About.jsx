export default function About() {
  return (
    <section className="bg-[var(--color-primary)] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">About Easy D Logistics</h1>

        <p className="text-gray-300 text-lg mb-6">
          Easy D Logistics is committed to helping truckers maximize earnings, reduce
          downtime, and eliminate administrative stress. We assist owner-operators and
          small fleets with reliable, 24/7 dispatching services that prioritize integrity
          and transparency.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-3">Our Mission</h2>
        <p className="text-gray-300 mb-6">
          Our mission is to provide top-tier dispatching services that build long-term
          partnerships with drivers and help them grow sustainably in a competitive market.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-3">Why Choose Us?</h2>

        <ul className="text-gray-300 space-y-3 mb-10">
          <li>• Transparent communication at all times</li>
          <li>• Strong negotiation for top-paying loads</li>
          <li>• 24/7 support with real dispatchers</li>
          <li>• Compliance & paperwork handled for you</li>
          <li>• Focus on growing driver revenue consistently</li>
        </ul>

        <div className="p-6 bg-[var(--color-primary-softer)] border border-[var(--color-accent)] rounded-xl">
          <h3 className="text-xl font-semibold text-[var(--color-accent)] mb-2">
            “Drivers first — always.”
          </h3>
          <p className="text-gray-300 text-sm">
            Everything we do is built around supporting truckers and maximizing their success.
          </p>
        </div>

      </div>
    </section>
  );
}