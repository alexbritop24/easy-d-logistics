export default function CTABanner() {
  return (
    <section className="py-10 md:py-16 bg-[var(--color-primary)] text-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Ready To Maximize Your Earnings?
        </h2>

        <p className="text-white/80 mb-6 text-sm md:text-base">
          Join Easy D Logistics and get premium dispatching — without the stress.
        </p>

        <a
          href="/get-started"
          className="inline-block px-6 py-3 rounded-lg font-semibold bg-[var(--color-accent)] text-[var(--color-primary)] hover:opacity-90 transition"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}