import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import SectionHeading from '../components/SectionHeading'
import useInView from '../components/useInView'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+44 123 456 7890', '+44 123 456 7891'],
    href: 'tel:+441234567890',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@skyhaul.co.uk', 'quotes@skyhaul.co.uk'],
    href: 'mailto:info@skyhaul.co.uk',
  },
  {
    icon: MapPin,
    title: 'Office Address',
    details: ['123 Logistics House', 'Freight Lane', 'London, EC2A 4BX', 'United Kingdom'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
  },
]

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us - Skyhaul Logistics'
  }, [])

  return (
    <>
      <Helmet>
        <title>Contact Us - Skyhaul Logistics | Get a Quote</title>
        <meta name="description" content="Contact Skyhaul Logistics for freight quotes, logistics enquiries, and supply chain solutions. Call us, email us, or visit our London office." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-skyblue pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=800&fit=crop"
            alt="Contact Skyhaul logistics team"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-skyblue/80 to-skyblue" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 animate-fade-in-up">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto animate-fade-in-up animation-delay-200">
            Get in touch with our team for quotes, enquiries, or to discuss your logistics requirements.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Get in Touch"
            subtitle="We'd love to hear from you. Reach out using any of the methods below."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <ContactInfoCard key={info.title} {...info} index={i} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <MapPlaceholder />

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactInfoCard({ icon: Icon, title, details, href, index }) {
  const [ref, isInView] = useInView()
  const Wrapper = href ? 'a' : 'div'

  return (
    <Wrapper
      ref={ref}
      {...(href ? { href } : {})}
      className={`block bg-white rounded-2xl p-6 border border-navy-100 hover:shadow-lg hover:border-gold-400/50 transition-all duration-300 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-12 h-12 rounded-xl bg-skyblue group-hover:bg-gold-400/10 flex items-center justify-center mb-4 transition-colors duration-300">
        <Icon size={20} className="text-white group-hover:text-gold-500 transition-colors duration-300" />
      </div>
      <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
      <div className="space-y-1">
        {details.map((detail, i) => (
          <p key={i} className="text-navy-500 text-sm">{detail}</p>
        ))}
      </div>
    </Wrapper>
  )
}

function MapPlaceholder() {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`rounded-2xl overflow-hidden border border-navy-100 bg-navy-50 flex items-center justify-center min-h-[280px] sm:min-h-[400px] ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="text-center p-8">
        <MapPin size={48} className="text-navy-300 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-navy-900 mb-2">Our Location</h3>
        <p className="text-navy-500 text-sm mb-4">
          123 Logistics House, Freight Lane,<br />
          London, EC2A 4BX
        </p>
        <div className="w-full h-64 bg-navy-100 rounded-xl flex items-center justify-center">
          <p className="text-navy-400 text-sm">Google Maps Integration</p>
        </div>
      </div>
    </div>
  )
}
