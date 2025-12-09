export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto text-center px-6">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Professional Dispatching for  
          <span className="text-[var(--color-accent)]"> Owner Operators & Small Fleets</span>
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
          Keep your trucks loaded, earn more per mile, and eliminate paperwork stress.
          We handle everything so you can stay focused on driving.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/get-started"
            className="px-8 py-3 bg-[var(--color-accent)] text-black font-semibold rounded-lg hover:bg-green-400 transition"
          >
            Start Dispatching Today
          </a>

          <a
            href="/services"
            className="px-8 py-3 border border-[var(--color-accent)] rounded-lg text-white hover:bg-[var(--color-accent)] hover:text-black transition"
          >
            View Services
          </a>
        </div>

      </div>
    </section>
  );
}