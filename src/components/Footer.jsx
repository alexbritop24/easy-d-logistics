export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-softer)] text-white">
      <div
        className="
          max-w-7xl mx-auto px-6
          py-8 md:py-14
          grid grid-cols-1 md:grid-cols-3
          gap-6 md:gap-10
        "
      >
        {/* Branding */}
        <div>
          <h2 className="text-lg md:text-2xl font-bold">
            Easy D{" "}
            <span className="text-[var(--color-accent)]">Logistics</span>
          </h2>

          <p className="mt-2 text-sm text-white/65 leading-snug">
            Professional dispatching services for owner-operators and small fleets.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base md:text-xl font-bold mb-2">
            Quick Links
          </h3>

          <ul className="space-y-1 text-sm text-white/65">
            <li><a href="/" className="hover:text-[var(--color-accent)] transition">Home</a></li>
            <li><a href="/services" className="hover:text-[var(--color-accent)] transition">Services</a></li>
            <li><a href="/pricing" className="hover:text-[var(--color-accent)] transition">Pricing</a></li>
            <li><a href="/about" className="hover:text-[var(--color-accent)] transition">About</a></li>
            <li><a href="/contact" className="hover:text-[var(--color-accent)] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base md:text-xl font-bold mb-2">
            Contact
          </h3>

          <ul className="space-y-1 text-sm text-white/65">
            <li>
              <span className="text-[var(--color-accent)] font-semibold">Email:</span>{" "}
              dispatch@easydlogistics.com
            </li>
            <li>
              <span className="text-[var(--color-accent)] font-semibold">Phone:</span>{" "}
              (555) 123-4567
            </li>
            <li>
              <span className="text-[var(--color-accent)] font-semibold">Hours:</span>{" "}
              24/7 Dispatch Support
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="
          text-center
          text-[11px] md:text-sm
          text-white/45
          border-t border-white/10
          py-3
        "
      >
        © {new Date().getFullYear()} Easy D Logistics. All rights reserved.
      </div>
    </footer>
  );
}