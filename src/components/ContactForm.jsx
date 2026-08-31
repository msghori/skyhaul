import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import useInView from "./useInView";

const initialState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm({ isQuote = false }) {
  const [ref, isInView] = useInView();
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    const now = new Date();
    const time = now.toLocaleString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const templateParams = {
      fullname: form.fullName,
      company: form.company,
      email: form.email,
      phone: form.phone,
      message: form.message,
      time,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl p-6 sm:p-8 border border-navy-100 shadow-lg shadow-navy-900/5 ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      {isQuote && (
        <h3 className="text-xl font-bold text-navy-900 mb-6">
          Request a Free Quote
        </h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-navy-700 mb-1.5"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={form.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-navy-700 mb-1.5"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
            placeholder="Company Ltd"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-navy-700 mb-1.5"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
            placeholder="john@company.co.uk"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-navy-700 mb-1.5"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
            placeholder="+44 123 456 7890"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-navy-700 mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all resize-none"
            placeholder="Tell us about your shipment requirements..."
          />
        </div>
      </div>
      {status === "success" && (
        <div className="mt-5 flex items-center gap-2 text-sm text-green-600 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
          <CheckCircle size={18} className="shrink-0" />
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {status === "error" && (
        <div className="mt-5 flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle size={18} className="shrink-0" />
          Something went wrong. Please try again.
        </div>
      )}
      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold-400/25 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Send size={16} />
        )}
        {sending ? "Sending..." : isQuote ? "Request a Quote" : "Send Message"}
      </button>
    </form>
  );
}
