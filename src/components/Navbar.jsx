export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-primary)]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Brand */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Easy D{" "}
          <span className="text-[var(--color-accent)]">
            Logistics
          </span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Pricing", href: "/pricing" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative
                transition
                hover:text-white
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-[var(--color-accent)]
                after:transition-all
                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/get-started"
          className="
            hidden md:inline-flex
            items-center
            justify-center
            px-6
            py-2
            rounded-lg
            font-semibold
            bg-[var(--color-accent)]
            text-[var(--color-primary)]
            transition
            hover:opacity-90
          "
        >
          Get Started
        </a>

      </div>
    </nav>
  );
}