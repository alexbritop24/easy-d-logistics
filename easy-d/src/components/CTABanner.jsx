export default function CTABanner() {
  return (
    <section className="py-16 bg-[var(--color-primary)] text-white">
      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-3xl font-bold">
          Ready To Maximize Your Earnings?
        </h2>

        <p className="mt-4 text-gray-300">
          Join Easy D Logistics and get premium dispatching — without the stress.
        </p>

        <a
          href="/get-started"
          className="inline-block mt-8 px-10 py-3 bg-[var(--color-accent)] text-black font-semibold rounded-lg hover:bg-green-400 transition"
        >
          Get Started Now
        </a>

      </div>
    </section>
  );
}