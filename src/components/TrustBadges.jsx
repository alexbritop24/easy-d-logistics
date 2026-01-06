// src/components/TrustBadges.jsx
export default function TrustBadges() {
  return (
    <section className="bg-[var(--color-primary)] text-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 text-center">
          <div className="p-5 md:p-8 bg-[var(--color-primary-softer)] rounded-xl border border-white/15 transition hover:border-[var(--color-accent)]">
            <h3 className="text-lg md:text-xl font-semibold mb-2 leading-tight">
              24/7 Dispatching
            </h3>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              Always available, every mile of the way.
            </p>
          </div>

          <div className="p-5 md:p-8 bg-[var(--color-primary-softer)] rounded-xl border border-white/15 transition hover:border-[var(--color-accent)]">
            <h3 className="text-lg md:text-xl font-semibold mb-2 leading-tight">
              Paperwork &amp; Compliance
            </h3>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              We handle all broker + load paperwork.
            </p>
          </div>

          <div className="p-5 md:p-8 bg-[var(--color-primary-softer)] rounded-xl border border-white/15 transition hover:border-[var(--color-accent)]">
            <h3 className="text-lg md:text-xl font-semibold mb-2 leading-tight">
              Top Paying Loads
            </h3>
            <p className="text-white/70 leading-relaxed text-sm md:text-base">
              Expert negotiation for highest RPM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}