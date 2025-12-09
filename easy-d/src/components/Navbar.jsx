export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[var(--color-primary)] shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold tracking-wide">
          Easy D <span className="text-[var(--color-accent)]">Logistics</span>
        </h1>

        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="/" className="hover:text-[var(--color-accent)] transition">Home</a>
          <a href="/about" className="hover:text-[var(--color-accent)] transition">About</a>
          <a href="/services" className="hover:text-[var(--color-accent)] transition">Services</a>
          <a href="/pricing" className="hover:text-[var(--color-accent)] transition">Pricing</a>
          <a href="/contact" className="hover:text-[var(--color-accent)] transition">Contact</a>
        </div>

        <a
          href="/get-started"
          className="hidden md:block bg-[var(--color-accent)] text-black font-semibold px-6 py-2 rounded-lg hover:bg-green-400 transition"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}