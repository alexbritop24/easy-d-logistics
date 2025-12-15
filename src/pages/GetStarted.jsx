import { useState } from "react";

export default function GetStarted() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    mcNumber: "",
    truckType: "",
    equipment: "",
    regions: "",
    revenueGoal: "",
  });

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert("Your information has been submitted successfully!");
  };

  return (
    <section className="py-20 bg-[var(--color-primary)] text-white px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          Get Started
        </h1>

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
          {[
            { label: "Full Name", name: "name" },
            { label: "Phone", name: "phone" },
            { label: "Email", name: "email", type: "email" },
            { label: "MC Number", name: "mcNumber" },
            { label: "Truck Type", name: "truckType" },
            { label: "Equipment", name: "equipment" },
            { label: "Preferred Regions", name: "regions" },
            { label: "Weekly Revenue Goal", name: "revenueGoal" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm mb-1 text-white/80">
                {field.label}
              </label>

              <input
                name={field.name}
                type={field.type || "text"}
                onChange={update}
                required={field.name !== "mcNumber"}
                placeholder={field.label}
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
            </div>
          ))}

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
            Submit Information
          </button>
        </form>

      </div>
    </section>
  );
}