export default function TrustBadges() {
  return (
    <section className="py-24 bg-[var(--color-primary)] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div
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
            <h3 className="text-xl font-semibold mb-2">
              24/7 Dispatching
            </h3>
            <p className="text-white/70 leading-relaxed">
              Always available, every mile of the way.
            </p>
          </div>

          <div
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
            <h3 className="text-xl font-semibold mb-2">
              Paperwork & Compliance
            </h3>
            <p className="text-white/70 leading-relaxed">
              We handle all broker + load paperwork.
            </p>
          </div>

          <div
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
            <h3 className="text-xl font-semibold mb-2">
              Top Paying Loads
            </h3>
            <p className="text-white/70 leading-relaxed">
              Expert negotiation for highest RPM.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}