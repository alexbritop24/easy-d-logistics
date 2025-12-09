import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert("Message sent! We will reach out shortly.");
  };

  return (
    <section className="py-20 bg-[var(--color-primary-softer)] text-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-300 mb-4">
            We're here to help 24/7. Reach out anytime.
          </p>

          <ul className="text-gray-300 space-y-3">
            <li><strong className="text-[var(--color-accent)]">Phone:</strong> (555) 123-4567</li>
            <li><strong className="text-[var(--color-accent)]">Email:</strong> dispatch@easydlogistics.com</li>
            <li><strong className="text-[var(--color-accent)]">Support:</strong> 24/7</li>
          </ul>

          <div className="mt-6 w-full h-48 bg-[var(--color-primary)] border border-gray-600 rounded-xl flex items-center justify-center text-gray-500">
            Google Maps Placeholder
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={submit}
          className="p-8 bg-[var(--color-primary)] rounded-xl border border-[var(--color-accent)] space-y-6"
        >
          <input
            name="name"
            placeholder="Full Name"
            required
            onChange={update}
            className="w-full px-4 py-3 rounded bg-[var(--color-primary-softer)] border border-gray-600 focus:border-[var(--color-accent)] outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={update}
            className="w-full px-4 py-3 rounded bg-[var(--color-primary-softer)] border border-gray-600 focus:border-[var(--color-accent)] outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            onChange={update}
            className="w-full px-4 py-3 rounded bg-[var(--color-primary-softer)] border border-gray-600 focus:border-[var(--color-accent)] outline-none"
          ></textarea>

          <button className="w-full py-3 bg-[var(--color-accent)] text-black font-semibold rounded-lg hover:bg-green-400 transition">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}