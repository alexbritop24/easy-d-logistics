export default function TrustBadges() {
  const badges = [
    "24/7 Dispatch Support",
    "MC Authority Friendly",
    "Insurance & Compliance Ready",
    "Rate Negotiation Experts",
  ];

  return (
    <section className="bg-primary border-y border-slate-700 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-4">
        {badges.map((badge) => (
          <div
            key={badge}
            className="px-4 py-2 text-sm rounded-full border border-slate-600 bg-primary-light/50 text-white"
          >
            {badge}
          </div>
        ))}
      </div>
    </section>
  );
}