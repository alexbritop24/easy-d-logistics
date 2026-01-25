// src/components/CTABanner.jsx

export default function CTABanner() {
  return (
    <section className="bg-[var(--color-primary)] text-white">
      <div className="max-w-5xl mx-auto text-center px-6 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Ready To Maximize Your Earnings?
        </h2>

        <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
          Join Easy D Logistics and get premium dispatching, without the stress.
        </p>

        <div className="mt-6">
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
}