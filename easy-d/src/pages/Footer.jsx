import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-light border-t border-slate-700 py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* COMPANY INFO */}
        <div>
          <h3 className="text-xl font-semibold text-accent mb-2">
            Easy D Logistics
          </h3>
          <p className="text-slate-300 text-sm">
            Professional dispatching and freight management for owner-operators
            and small trucking fleets nationwide.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
          <ul className="text-slate-300 text-sm space-y-2">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-accent">Pricing</Link></li>
            <li><Link to="/faq" className="hover:text-accent">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Contact</h4>
          <ul className="text-slate-300 text-sm space-y-2">
            <li>Phone: (555) 987-6543</li>
            <li>Email: dispatch@easydlogistics.com</li>
            <li>24/7 Dispatch Support</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT ROW */}
      <div className="text-center text-slate-500 text-xs mt-10">
        © {new Date().getFullYear()} Easy D Logistics. All Rights Reserved.
      </div>
    </footer>
  );
}