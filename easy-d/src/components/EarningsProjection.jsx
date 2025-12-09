export default function EarningsProjection() {
  return (
    <section className="bg-primary-light py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            See Your Potential Earnings
          </h2>

          <p className="text-slate-300 text-sm mb-4">
            With Easy D Logistics, owner-operators and small fleets typically see
            higher weekly gross revenue due to strategic load planning, negotiation,
            and reduced downtime.
          </p>

          <ul className="text-slate-300 text-sm space-y-2">
            <li>• Optimized routes reduce deadhead miles</li>
            <li>• Negotiated rates increase per-load revenue</li>
            <li>• Faster booking keeps you moving</li>
          </ul>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-primary border border-slate-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-center mb-4">
            Weekly Revenue Example
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between text-slate-300">
              <span>Without Dispatch Support:</span>
              <span className="font-semibold">$4,500 / week</span>
            </div>

            <div className="flex justify-between text-slate-300">
              <span>With Easy D Logistics:</span>
              <span className="font-semibold text-accent">$6,000+ / week</span>
            </div>

            <div className="flex justify-between text-slate-300">
              <span>Monthly Difference:</span>
              <span className="font-semibold text-accent-soft">$6,000+</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 mt-4 text-center">
            These numbers are examples only. Results vary by equipment, market, and lane.
          </p>
        </div>

      </div>
    </section>
  );
}