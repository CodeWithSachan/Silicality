"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-7"
      >
        {/* Name */}
        <div>
          <label className="block text-sm mb-2 text-neutral-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl
            bg-neutral-900/60 border border-neutral-800
            text-white placeholder:text-neutral-500
            focus:outline-none focus:border-neutral-500 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-2 text-neutral-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl
            bg-neutral-900/60 border border-neutral-800
            text-white placeholder:text-neutral-500
            focus:outline-none focus:border-neutral-500 transition"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm mb-2 text-neutral-300">
            What are you looking for?
          </label>
          <select
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl
            bg-neutral-900/60 border border-neutral-800
            text-white focus:outline-none focus:border-neutral-500 transition"
          >
            <option value="">Select an option</option>
            <option value="AI Solutions">AI Solutions</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Design & Branding">Design & Branding</option>
            <option value="Events & Sponsorships">
              Events & Sponsorships
            </option>
            <option value="Mentorship / Collaboration">
              Mentorship / Collaboration
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm mb-2 text-neutral-300">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your idea, goals, or requirements…"
            className="w-full px-4 py-3 rounded-xl
            bg-neutral-900/60 border border-neutral-800
            text-white placeholder:text-neutral-500
            focus:outline-none focus:border-neutral-500
            transition resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center
          px-8 py-3 rounded-xl
          bg-white text-black font-medium
          hover:bg-neutral-200 transition
          disabled:opacity-60"
        >
          {status === "loading"
            ? "Sending…"
            : status === "success"
            ? "Message Sent ✓"
            : "Send Message"}
        </button>
      </motion.form>

      {/* Status messages */}
      <AnimatePresence>
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-sm text-green-400"
          >
            Thanks for reaching out! We’ll get back to you within 24–48 hours.
          </motion.p>
        )}

        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-sm text-red-400"
          >
            Something went wrong. Please try again later.
          </motion.p>
        )}
      </AnimatePresence>

      <p className="mt-8 text-xs text-neutral-500 max-w-xl">
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>
        . We use your information only to respond to your inquiry.
      </p>
    </>
  );
}
