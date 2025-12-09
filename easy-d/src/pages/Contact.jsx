import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for reaching out. We will contact you soon.");
  };

  return (
    <section className="bg-primary text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* CONTACT INFO */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

          <p className="text-slate-300 mb-4">
            Have questions? Want to start dispatching?  
            Our team is available 24/7 to help you.
          </p>

          <div className="space-y-3 text-sm text-slate-300">
            <p><strong className="text-accent">Phone:</strong> (555) 987-6543</p>
            <p><strong className="text-accent">Email:</strong> dispatch@easydlogistics.com</p>
            <p><strong className="text-accent">Business Hours:</strong> 24/7 Dispatch Support</p>
          </div>

          {/* MAP PLACEHOLDER */}
          <div className="mt-6">
            <div className="w-full h-48 bg-primary-light border border-slate-700 rounded-xl flex items-center justify-center text-slate-500">
              Google Maps Placeholder
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-primary-light border border-slate-700 p-8 rounded-xl space-y-6"
        >
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-primary border border-slate-600 outline-none focus:border-accent"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-primary border border-slate-600 outline-none focus:border-accent"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-primary border border-slate-600 outline-none focus:border-accent"
              placeholder="How can we help you?"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-accent text-primary-softer rounded-full font-semibold hover:bg-accent-soft transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}