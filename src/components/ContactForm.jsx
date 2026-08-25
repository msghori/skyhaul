import { Send } from 'lucide-react'
import useInView from './useInView'

export default function ContactForm({ isQuote = false }) {
  const [ref, isInView] = useInView()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl p-6 sm:p-8 border border-navy-100 shadow-lg shadow-navy-900/5 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {isQuote && (
        <h3 className="text-xl font-bold text-navy-900 mb-6">Request a Free Quote</h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-navy-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="companyName" className="block text-sm font-semibold text-navy-700 mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
            placeholder="Company Ltd"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy-700 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
            placeholder="john@company.co.uk"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy-700 mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
            placeholder="+44 123 456 7890"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="block text-sm font-semibold text-navy-700 mb-1.5">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all appearance-none"
          >
            <option value="">Select a service</option>
            <option value="road-freight">Road Freight</option>
            <option value="air-freight">Air Freight</option>
            <option value="sea-freight">Sea Freight</option>
            <option value="freight-forwarding">Freight Forwarding</option>
            <option value="warehousing">Warehousing</option>
            <option value="supply-chain">Supply Chain Management</option>
            <option value="express-delivery">Express Delivery</option>
            <option value="customs-clearance">Customs Clearance</option>
            <option value="last-mile">Last-Mile Delivery</option>
          </select>
        </div>
        <div>
          <label htmlFor="pickup" className="block text-sm font-semibold text-navy-700 mb-1.5">
            Pickup Location
          </label>
          <input
            type="text"
            id="pickup"
            name="pickup"
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
            placeholder="City, Country"
          />
        </div>
        <div>
          <label htmlFor="delivery" className="block text-sm font-semibold text-navy-700 mb-1.5">
            Delivery Location
          </label>
          <input
            type="text"
            id="delivery"
            name="delivery"
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
            placeholder="City, Country"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-navy-700 mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all resize-none"
            placeholder="Tell us about your shipment requirements..."
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold-400/25 active:scale-[0.97]"
      >
        <Send size={16} />
        {isQuote ? 'Request a Quote' : 'Send Message'}
      </button>
    </form>
  )
}
