export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-softer)] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold">
            Easy D <span className="text-[var(--color-accent)]">Logistics</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Professional dispatching services for owner-operators and small fleets.
            We keep your wheels turning and earnings growing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-[var(--color-accent)] transition">Home</a></li>
            <li><a href="/services" className="hover:text-[var(--color-accent)] transition">Services</a></li>
            <li><a href="/pricing" className="hover:text-[var(--color-accent)] transition">Pricing</a></li>
            <li><a href="/about" className="hover:text-[var(--color-accent)] transition">About</a></li>
            <li><a href="/contact" className="hover:text-[var(--color-accent)] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <span className="font-semibold text-[var(--color-accent)]">Email:</span><br />
              dispatch@easydlogistics.com
            </li>
            <li>
              <span className="font-semibold text-[var(--color-accent)]">Phone:</span><br />
              (555) 123-4567
            </li>
            <li>
              <span className="font-semibold text-[var(--color-accent)]">Hours:</span><br />
              24/7 Dispatch Support
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Easy D Logistics. All rights reserved.
      </div>
    </footer>
  );
}