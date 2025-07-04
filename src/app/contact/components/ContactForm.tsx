"use client";

import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const form = formRef.current;
    if (!form) return;

    const fullName = `${form.firstName.value} ${form.lastName.value}`;
    const data = {
      fullName,
      email: form.email.value,
      phone: form.phone.value,
      project: form.message.value || "Not specified",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact-form" className="min-h-screen bg-[#f8f8f7] px-6 py-16 md:px-24 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-start items-top">
            <h2 className="text-3xl md:text-4xl font-bold text-[#344249] leading-snug mb-4">
            Ready to receive an exceptional solution for your construction needs?
            </h2>
            <p className="text-sm text-[#344249]">
            Tell us a little bit about your project and our expert will be in touch soon.
            </p>
        </div>

        <div className="flex justify-center items-center">
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 text-sm text-gray-800 w-full"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="firstName" className="block mb-1">First Name*</label>
                <input
                name="firstName"
                type="text"
                required
                className="w-full border-b border-gray-400 px-2 py-2 focus:outline-none"
                />
            </div>
            <div>
                <label htmlFor="lastName" className="block mb-1">Last Name*</label>
                <input
                name="lastName"
                type="text"
                required
                className="w-full border-b border-gray-400 px-2 py-2 focus:outline-none"
                />
            </div>
            </div>

            <div>
            <label htmlFor="email" className="block mb-1">Email*</label>
            <input
                name="email"
                type="email"
                required
                className="w-full border-b border-gray-400 px-2 py-2 focus:outline-none"
            />
            </div>

            <div>
            <label htmlFor="company" className="block mb-1">Company Name</label>
            <input
                name="company"
                type="text"
                className="w-full border-b border-gray-400 px-2 py-2 focus:outline-none"
            />
            </div>

            <div>
            <label htmlFor="phone" className="block mb-1">Phone Number*</label>
            <input
                name="phone"
                type="tel"
                required
                className="w-full border-b border-gray-400 px-2 py-2 focus:outline-none"
            />
            </div>

            <div>
            <label htmlFor="message" className="block mb-1">How Can We Help You?</label>
            <textarea
                name="message"
                rows={4}
                className="w-full border-b border-gray-400 px-2 py-2 focus:outline-none"
            ></textarea>
            </div>

            <button
            type="submit"
            disabled={status === "loading"}
            className="bg-[#7c0000] text-white px-6 py-3 mt-4 text-sm tracking-wider hover:bg-[#5a0000]"
            >
            {status === "loading" ? "Submitting..." : "SUBMIT"}
            </button>

            {status === "success" && (
            <p className="text-green-600 mt-2">Your message has been sent successfully.</p>
            )}
            {status === "error" && (
            <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>
            )}
        </form>
        </div>
        </div>
    </section>
  );
}
