import aboutImage from "../assets/dispatch-team-portrait.jpeg";

export default function About() {
  return (
    <section className="bg-[var(--color-primary)] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header (consistent with other pages) */}
        <header className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About Easy D Logistics
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
            Dispatch support built for owner-operators and small fleets — focused on
            uptime, strong rates, and less admin stress.
          </p>
        </header>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Easy D Logistics is committed to helping truckers maximize earnings,
              reduce downtime, and eliminate administrative stress. We assist
              owner-operators and small fleets with reliable, 24/7 dispatching
              services that prioritize integrity and transparency.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-3">
              Our Mission
            </h2>
            <p className="text-gray-300 mb-6">
              Our mission is to provide top-tier dispatching services that build
              long-term partnerships with drivers and help them grow sustainably
              in a competitive market.
            </p>

            <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-3">
              Why Choose Us?
            </h2>

            <ul className="text-gray-300 space-y-3 mb-8">
              <li>• Transparent communication at all times</li>
              <li>• Strong negotiation for top-paying loads</li>
              <li>• 24/7 support with real dispatchers</li>
              <li>• Paperwork handled for you</li>
              <li>• Focus on growing driver revenue consistently</li>
            </ul>

            <div className="p-6 bg-[var(--color-primary-softer)] border border-[var(--color-accent)] rounded-xl">
              <h3 className="text-xl font-semibold text-[var(--color-accent)] mb-2">
                “Drivers first — always.”
              </h3>
              <p className="text-gray-300 text-sm">
                Everything we do is built around supporting truckers and maximizing
                their success.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <img
              src={aboutImage}
              alt="Easy D Logistics dispatch support team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}