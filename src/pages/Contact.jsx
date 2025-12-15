import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert("Message sent! We will reach out shortly.");
  };

  return (
    <section className="py-20 bg-[var(--color-primary)] text-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-white/80 mb-4">
            We're here to help 24/7. Reach out anytime.
          </p>

          <ul className="text-white/80 space-y-3">
            <li>
              <strong className="text-[var(--color-accent)]">Phone:</strong>{" "}
              (555) 123-4567
            </li>
            <li>
              <strong className="text-[var(--color-accent)]">Email:</strong>{" "}
              dispatch@easydlogistics.com
            </li>
            <li>
              <strong className="text-[var(--color-accent)]">Support:</strong>{" "}
              24/7
            </li>
          </ul>

          <div
            className="
              mt-6
              w-full
              h-48
              bg-[var(--color-primary-softer)]
              border
              border-white/20
              rounded-xl
              flex
              items-center
              justify-center
              text-white/50
            "
          >
            Google Maps Placeholder
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={submit}
          className="
            p-8
            bg-[var(--color-primary-softer)]
            rounded-xl
            border
            border-[var(--color-accent)]
            space-y-6
          "
        >
          <input
            name="name"
            placeholder="Full Name"
            required
            onChange={update}
            className="
              w-full
              px-4
              py-3
              rounded
              bg-[var(--color-primary)]
              border
              border-white/20
              focus:border-[var(--color-accent)]
              outline-none
              text-white
              placeholder-white/40
              transition
            "
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={update}
            className="
              w-full
              px-4
              py-3
              rounded
              bg-[var(--color-primary)]
              border
              border-white/20
              focus:border-[var(--color-accent)]
              outline-none
              text-white
              placeholder-white/40
              transition
            "
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            onChange={update}
            className="
              w-full
              px-4
              py-3
              rounded
              bg-[var(--color-primary)]
              border
              border-white/20
              focus:border-[var(--color-accent)]
              outline-none
              text-white
              placeholder-white/40
              transition
            "
          />

          <button
            type="submit"
            className="
              w-full
              py-3
              rounded-lg
              font-semibold
              bg-[var(--color-accent)]
              text-[var(--color-primary)]
              transition
              hover:opacity-90
            "
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}