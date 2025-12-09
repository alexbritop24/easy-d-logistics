import { useState } from "react";

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    mcNumber: "",
    truckType: "",
    equipment: "",
    regions: "",
    revenueGoal: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted data:", formData);

    alert("Your information has been sent! Easy D Logistics will contact you shortly.");
  };

  return (
    <section className="bg-primary text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          Get Started With Easy D Logistics
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-primary-light border border-slate-700 p-8 rounded-xl"
        >
          {/** NAME */}
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-primary border border-slate-600 focus:border-accent outline-none"
              placeholder="John Doe"
              required
            />
          </div>

          {/** PHONE */}
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              name="phone"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-primary border border-slate-600 focus:border-accent outline-none"
              placeholder="(555) 123-4567"
              required
            />
          </div>

          {/** EMAIL */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-primary border border-slate-600 focus:border-accent outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          {/** MC NUMBER */}
          <div>
            <label className="block text-sm mb-1">MC Number</label>
            <input
              name="mcNumber"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-primary border border-slate-600 focus:border-accent outline-none"
              placeholder="MC123456"
            />
          </div>

          {/** TRUCK TYPE */}
          <div>
            <label className="block text-sm mb-1">Truck Type</label>
            <input
              name="truckType"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-primary border border-slate-600 focus:border-accent outline-none"
              placeholder="Dry Van, Flatbed, Box Truck, etc."
            />
          </div>

          {/** EQUIPMENT */}
          <div>
            <label className="block text-sm mb-1">Equipment</label>
            <input
              name="equipment"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-primary border border-slate-600 focus:border-accent outline-none"
              placeholder="Chains, Tarps, Straps, etc."
            />
          </div>

          {/** REGIONS */}
          <div>
            <label className="block text-sm mb-1">Preferred Regions</label>
            <input
              name="regions"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-primary border border-slate-600 focus:border-accent outline-none"
              placeholder="Midwest, Southeast, Northeast, etc."
            />
          </div>

          {/** REVENUE GOAL */}
          <div>
            <label className="block text-sm mb-1">Weekly Revenue Goal</label>
            <input
              name="revenueGoal"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-primary border border-slate-600 focus:border-accent outline-none"
              placeholder="$5,000–$8,000+"
            />
          </div>

          {/** SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-accent text-primary-softer rounded-full font-semibold hover:bg-accent-soft transition"
          >
            Submit Information
          </button>
        </form>
      </div>
    </section>
  );
}