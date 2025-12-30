export default function CTABanner() {
  return (
    <section className="py-10 md:py-16 bg-[var(--color-primary)] text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Ready To Maximize Your Earnings?
        </h2>

        <p className="mt-3 md:mt-4 text-white/80">
          Join Easy D Logistics and get premium dispatching — without the stress.
        </p>

        <div className="mt-6 md:mt-8">
          <a
            href="/get-started"
            className="
              inline-block
              px-8 py-3
              bg-[var(--color-accent)]
              text-[var(--color-primary)]
              font-semibold
              rounded-lg
              transition
              hover:opacity-90
            "
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
}