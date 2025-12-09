export default function HowItWorks() {
  return (
    <section className="py-20 bg-[var(--color-primary)] text-white">
      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-3xl font-bold mb-10">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="p-6 bg-[var(--color-primary-softer)] rounded-xl border border-[var(--color-accent)]">
            <h3 className="text-xl font-semibold">1. Sign Up</h3>
            <p className="text-gray-300 mt-2">Fill out the quick onboarding form.</p>
          </div>

          <div className="p-6 bg-[var(--color-primary-softer)] rounded-xl border border-[var(--color-accent)]">
            <h3 className="text-xl font-semibold">2. We Find Loads</h3>
            <p className="text-gray-300 mt-2">We negotiate and book the best paying freight.</p>
          </div>

          <div className="p-6 bg-[var(--color-primary-softer)] rounded-xl border border-[var(--color-accent)]">
            <h3 className="text-xl font-semibold">3. You Drive</h3>
            <p className="text-gray-300 mt-2">You haul — we handle everything else.</p>
          </div>

        </div>

      </div>
    </section>
  );
}