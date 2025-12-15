export default function Footer() {
  return (
    <footer
      className="py-14 mt-20"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-white">

        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold">
            Easy D{" "}
            <span style={{ color: "var(--color-secondary)" }}>
              Logistics
            </span>
          </h2>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Professional dispatching services for owner-operators and small fleets.
            We keep your wheels turning and your earnings growing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:opacity-80 transition"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <span
                className="font-semibold"
                style={{ color: "var(--color-secondary)" }}
              >
                Email
              </span>
              <br />
              dispatch@easydlogistics.com
            </li>

            <li>
              <span
                className="font-semibold"
                style={{ color: "var(--color-secondary)" }}
              >
                Phone
              </span>
              <br />
              (555) 123-4567
            </li>

            <li>
              <span
                className="font-semibold"
                style={{ color: "var(--color-secondary)" }}
              >
                Hours
              </span>
              <br />
              24/7 Dispatch Support
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div
        className="mt-12 pt-6 text-center text-sm"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          color: "#D3D3D3",
        }}
      >
        © {new Date().getFullYear()} Easy D Logistics. All rights reserved.
      </div>
    </footer>
  );
}