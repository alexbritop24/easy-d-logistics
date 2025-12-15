export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-softer)] text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold">
            Easy D <span className="text-[var(--color-accent)]">Logistics</span>
          </h2>
          <p className="mt-3 text-white/70 text-sm leading-relaxed">
            Professional dispatching services for owner-operators and small fleets.
            We keep your wheels turning and earnings growing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="/" className="hover:text-[var(--color-accent)] transition">Home</a></li>
            <li><a href="/services" className="hover:text-[var(--color-accent)] transition">Services</a></li>
            <li><a href="/pricing" className="hover:text-[var(--color-accent)] transition">Pricing</a></li>
            <li><a href="/about" className="hover:text-[var(--color-accent)] transition">About</a></li>
            <li><a href="/contact" className="hover:text-[var(--color-accent)] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>
              <span className="text-[var(--color-accent)] font-medium">Email:</span><br />
              dispatch@easydlogistics.com
            </li>
            <li>
              <span className="text-[var(--color-accent)] font-medium">Phone:</span><br />
              (555) 123-4567
            </li>
            <li>
              <span className="text-[var(--color-accent)] font-medium">Hours:</span><br />
              24/7 Dispatch Support
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-white/50 text-xs mt-8 border-t border-white/10 pt-4">
        © {new Date().getFullYear()} Easy D Logistics. All rights reserved.
      </div>
    </footer>
  );
}