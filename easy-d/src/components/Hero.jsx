import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-primary-light py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Drive More. Stress Less.  
            <span className="text-accent"> We Handle Your Loads.</span>
          </h1>

          <p className="text-slate-300 text-lg mb-6">
            Easy D Logistics provides professional dispatching and freight-management 
            solutions for owner-operators and small fleets nationwide.
          </p>

          <div className="flex gap-4">
            <Link
              to="/get-started"
              className="px-6 py-3 rounded-full bg-accent text-primary-softer font-semibold text-sm hover:bg-accent-soft transition"
            >
              Start Dispatching Today
            </Link>

            <Link
              to="/services"
              className="px-6 py-3 rounded-full border border-slate-500 text-sm font-semibold hover:border-accent hover:text-accent transition"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-primary rounded-xl border border-slate-700 p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">Easy D Dispatch Dashboard</h3>
          <p className="text-slate-300 text-sm mb-6">
            Track loads, revenue, documents, and driver updates in real time.
          </p>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-primary-light p-4 rounded-xl border border-slate-700">
              <p className="text-accent text-xl font-bold">24/7</p>
              <p className="text-slate-400 text-xs">Support</p>
            </div>

            <div className="bg-primary-light p-4 rounded-xl border border-slate-700">
              <p className="text-accent text-xl font-bold">7%</p>
              <p className="text-slate-400 text-xs">Flat Rate</p>
            </div>

            <div className="bg-primary-light p-4 rounded-xl border border-slate-700">
              <p className="text-accent text-xl font-bold">100+</p>
              <p className="text-slate-400 text-xs">Loads Managed</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}