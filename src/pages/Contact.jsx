import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, Clock } from "lucide-react";
import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/SectionHeading";
import useInView from "../components/useInView";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+44 7300066079"],
    href: "tel:+447300066079",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["Skyhaul@hotmail.com"],
    href: "mailto:Skyhaul@hotmail.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["AnyTime - 24/7", "Monday - Sunday"],
  },
];

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us - Skyhaul Logistics";
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - Skyhaul Logistics | Get a Quote</title>
        <meta
          name="description"
          content="Contact Skyhaul Logistics for freight quotes, logistics enquiries, and supply chain solutions. Call us or email us to get started."
        />
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
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto animate-fade-in-up animation-delay-200">
            Get in touch with our team for quotes, enquiries, or to discuss your
            logistics requirements.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <ContactInfoCard key={info.title} {...info} index={i} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfoCard({ icon: Icon, title, details, href, index }) {
  const [ref, isInView] = useInView();
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      ref={ref}
      {...(href ? { href } : {})}
      className={`block bg-white rounded-2xl p-6 border border-navy-100 hover:shadow-lg hover:border-gold-400/50 transition-all duration-300 ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-12 h-12 rounded-xl bg-skyblue group-hover:bg-gold-400/10 flex items-center justify-center mb-4 transition-colors duration-300">
        <Icon
          size={20}
          className="text-white group-hover:text-gold-500 transition-colors duration-300"
        />
      </div>
      <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
      <div className="space-y-1">
        {details.map((detail, i) => (
          <p key={i} className="text-navy-500 text-sm">
            {detail}
          </p>
        ))}
      </div>
    </Wrapper>
  );
}
