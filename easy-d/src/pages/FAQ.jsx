import { useState } from "react";

export default function FAQ() {
  const faqList = [
    {
      question: "What does a dispatch service do?",
      answer:
        "We find loads, negotiate rates, handle paperwork, manage route planning, and provide 24/7 support so you can stay focused on driving.",
    },
    {
      question: "How much does Easy D Logistics charge?",
      answer:
        "We offer three pricing plans starting at 7% of the load. Pro and Premium tiers include factoring support, compliance, and dedicated dispatchers.",
    },
    {
      question: "Do I need an MC number to work with you?",
      answer:
        "Yes. All carriers must have active MC authority, insurance, and compliance requirements in place to begin dispatching.",
    },
    {
      question: "What equipment types do you dispatch?",
      answer:
        "We work with Dry Van, Flatbed, Box Truck, Power-Only, Reefer, and Hotshot equipment.",
    },
    {
      question: "Am I forced into loads?",
      answer:
        "Never. You always approve every load before we book it. You remain in full control of your business.",
    },
    {
      question: "Is there a contract?",
      answer:
        "We do not lock drivers into long-term contracts. You can stop using our service anytime.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-primary text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqList.map((item, index) => (
            <div key={index} className="bg-primary-light border border-slate-700 rounded-xl">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center"
              >
                <span>{item.question}</span>
                <span className="text-accent">{openIndex === index ? "-" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-slate-300 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}