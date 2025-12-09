import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section className="bg-accent py-14 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary-softer mb-4">
          Ready to Start Dispatching With Easy D Logistics?
        </h2>

        <p className="text-primary-softer/80 text-sm mb-6 max-w-xl mx-auto">
          Our team is ready 24/7 to keep your wheels turning.  
          Get started today and secure better loads, better rates, and a better workflow.
        </p>

        <Link
          to="/get-started"
          className="px-8 py-3 bg-primary-softer text-accent font-semibold rounded-full hover:bg-primary transition"
        >
          Start Today
        </Link>
      </div>
    </section>
  );
}