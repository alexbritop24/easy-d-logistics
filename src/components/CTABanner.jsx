export default function CTABanner() {
  return (
    <section className="py-10 bg-[var(--color-primary)] text-white">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-2xl md:text-3xl font-bold">
          Ready To Maximize Your Earnings?
        </h2>

        <p className="mt-3 text-white/80">
          Join Easy D Logistics and get premium dispatching — without the stress.
        </p>

        <a
          href="/get-started"
          className="
            inline-block
            mt-6
            px-8
            py-3
            rounded-lg
            font-semibold
            bg-[var(--color-accent)]
            text-[var(--color-primary)]
            transition
            hover:opacity-90
          "
        >
          Get Started Now
        </a>

      </div>
    </section>
  );
}