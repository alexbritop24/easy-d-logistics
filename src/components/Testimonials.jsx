export default function Testimonials() {
  return (
    <section className="py-20 bg-[var(--color-primary)] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">What Drivers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="p-6 bg-[var(--color-primary-softer)] border border-[var(--color-accent)] rounded-xl">
            <p className="text-gray-300">
              “Best dispatch service I’ve ever used — loads are consistent and pay great.”
            </p>
            <h3 className="mt-4 font-bold text-[var(--color-accent)]">J. Martinez</h3>
          </div>

          <div className="p-6 bg-[var(--color-primary-softer)] border border-[var(--color-accent)] rounded-xl">
            <p className="text-gray-300">
              “These guys negotiate better than anyone. My revenue jumped immediately.”
            </p>
            <h3 className="mt-4 font-bold text-[var(--color-accent)]">A. Brown</h3>
          </div>

          <div className="p-6 bg-[var(--color-primary-softer)] border border-[var(--color-accent)] rounded-xl">
            <p className="text-gray-300">
              “24/7 support is real — they always help no matter the time of day.”
            </p>
            <h3 className="mt-4 font-bold text-[var(--color-accent)]">D. Williams</h3>
          </div>

        </div>

      </div>
    </section>
  );
}