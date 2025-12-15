export default function TrustBadges() {
  return (
    <section
      className="py-16 text-white"
      style={{ backgroundColor: "var(--color-primary-softer)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6">

        {/* Badge 1 */}
        <div
          className="p-6 rounded-xl"
          style={{
            border: "1px solid rgba(255,255,255,0.25)",
            backgroundColor: "var(--color-primary)",
          }}
        >
          <h3
            className="text-xl font-bold"
            style={{ color: "var(--color-secondary)" }}
          >
            24/7 Dispatching
          </h3>
          <p className="text-gray-300 mt-2">
            Always available, every mile of the way.
          </p>
        </div>

        {/* Badge 2 */}
        <div
          className="p-6 rounded-xl"
          style={{
            border: "1px solid rgba(255,255,255,0.25)",
            backgroundColor: "var(--color-primary)",
          }}
        >
          <h3
            className="text-xl font-bold"
            style={{ color: "var(--color-secondary)" }}
          >
            Paperwork & Compliance
          </h3>
          <p className="text-gray-300 mt-2">
            We handle all broker and load paperwork.
          </p>
        </div>

        {/* Badge 3 */}
        <div
          className="p-6 rounded-xl"
          style={{
            border: "1px solid rgba(255,255,255,0.25)",
            backgroundColor: "var(--color-primary)",
          }}
        >
          <h3
            className="text-xl font-bold"
            style={{ color: "var(--color-secondary)" }}
          >
            Top Paying Loads
          </h3>
          <p className="text-gray-300 mt-2">
            Expert negotiation for the highest RPM.
          </p>
        </div>

      </div>
    </section>
  );
}