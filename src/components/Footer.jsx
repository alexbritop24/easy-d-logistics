// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white mt-12 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {/* Branding */}
          <div>
            <a href="/" className="inline-flex items-center">
              <img
                src="/easy-d-logo-navbar.png"
                alt="Easy D Logistics"
                className="h-10 w-auto"
                loading="lazy"
              />
            </a>

            <p className="mt-5 text-sm md:text-base text-white/68 leading-relaxed font-medium max-w-sm">
              Professional dispatching services for owner-operators and small fleets.
              We keep your wheels turning and earnings growing.
            </p>

            {/* Socials */}
            <div className="mt-7">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
                Follow Us
              </h3>

              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61587555931236"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    w-11 h-11 rounded-full
                    border border-white/10
                    bg-[var(--color-primary-softer)]
                    flex items-center justify-center
                    transition duration-200
                    hover:border-[var(--color-accent)]
                    hover:-translate-y-0.5
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    className="w-5 h-5"
                  >
                    <path d="M13 22v-8h3l1-4h-4V8.5c0-1.2.4-2 2.1-2H17V3.1c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.7V10H7v4h2.7v8H13z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/easydlogistics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    w-11 h-11 rounded-full
                    border border-white/10
                    bg-[var(--color-primary-softer)]
                    flex items-center justify-center
                    transition duration-200
                    hover:border-[var(--color-accent)]
                    hover:-translate-y-0.5
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    className="w-5 h-5"
                  >
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-3.1a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm md:text-base text-white/68 font-medium">
              <li>
                <a href="/" className="hover:text-[var(--color-accent)] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[var(--color-accent)] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-[var(--color-accent)] transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[var(--color-accent)] transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[var(--color-accent)] transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-[var(--color-accent)] transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
              Contact
            </h3>

            <ul className="space-y-4 text-sm md:text-base text-white/68 font-medium mb-7">
              <li>
                <span className="font-semibold text-[var(--color-accent)]">Phone:</span>{" "}
                <a
                  href="tel:+13852928031"
                  className="hover:text-[var(--color-accent)] transition"
                >
                  385-292-8031
                </a>
              </li>

              <li>
                <span className="font-semibold text-[var(--color-accent)]">Address:</span>{" "}
                <a
                  href="https://maps.google.com/?q=370+W+400+N+Suite+9+Provo+UT+84601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent)] transition"
                >
                  370 W 400 N, Suite 9
                  <br />
                  Provo, UT 84601
                </a>
              </li>

              <li>
                <span className="font-semibold text-[var(--color-accent)]">Hours:</span>{" "}
                24/7 Dispatch Support
              </li>
            </ul>

            <a
              href="/contact"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-xl font-semibold
                bg-[var(--color-accent)] text-[var(--color-primary)]
                hover:opacity-90 transition
              "
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-6 text-center text-sm text-white/45">
          © {new Date().getFullYear()} Apex Fusion Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
}