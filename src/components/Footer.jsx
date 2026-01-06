// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-softer)] text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Branding */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold">
              Easy D <span className="text-[var(--color-accent)]">Logistics</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed">
              Professional dispatching services for owner-operators and small fleets.
              We keep your wheels turning and earnings growing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3">Quick Links</h3>

            {/* On mobile: 2 columns to reduce height */}
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-2 text-sm md:text-base text-white/70">
              <li><a href="/" className="hover:text-[var(--color-accent)] transition">Home</a></li>
              <li><a href="/services" className="hover:text-[var(--color-accent)] transition">Services</a></li>
              <li><a href="/pricing" className="hover:text-[var(--color-accent)] transition">Pricing</a></li>
              <li><a href="/about" className="hover:text-[var(--color-accent)] transition">About</a></li>
              <li><a href="/contact" className="hover:text-[var(--color-accent)] transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm md:text-base text-white/70">
              <li>
                <span className="font-semibold text-[var(--color-accent)]">Email:</span>{" "}
                dispatch@easydlogistics.com
              </li>
              <li>
                <span className="font-semibold text-[var(--color-accent)]">Phone:</span>{" "}
                (555) 123-4567
              </li>
              <li>
                <span className="font-semibold text-[var(--color-accent)]">Hours:</span>{" "}
                24/7 Dispatch Support
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs md:text-sm text-white/50">
          © {new Date().getFullYear()} Easy D Logistics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}