import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { services } from "../data/content";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";
import useInView from "../components/useInView";

export default function Services() {
  useEffect(() => {
    document.title = "Our Services - Skyhaul Logistics";
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Our Services - Skyhaul Logistics | Road, Air, Sea Freight & More
        </title>
        <meta
          name="description"
          content="Explore Skyhaul's comprehensive logistics services including road freight, air freight, sea freight, warehousing, customs clearance, and supply chain management."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-skyblue pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&h=800&fit=crop"
            alt="Global logistics and freight transport network"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-skyblue/80 to-skyblue" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Comprehensive logistics solutions designed to move your business
            forward with efficiency, reliability, and care.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="End-to-End Logistics Solutions"
            subtitle="From a single parcel to a full container load, Skyhaul has the expertise and network to handle all your freight needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FullServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection />

      <CTASection
        title="Need a Reliable Logistics Partner?"
        subtitle="Let us show you how Skyhaul can transform your supply chain."
        buttonText="Request a Quote"
      />
    </>
  );
}

function FullServiceCard({ service, index }) {
  const [ref, isInView] = useInView();
  const { icon: Icon, title, fullDesc } = service;

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl p-6 sm:p-8 border border-navy-100 hover:border-gold-400/50 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300 ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="w-14 h-14 rounded-xl bg-skyblue group-hover:bg-gold-400/10 flex items-center justify-center mb-5 transition-colors duration-300">
        <Icon
          size={28}
          className="text-white group-hover:text-gold-500 transition-colors duration-300"
        />
      </div>
      <h3 className="text-lg font-bold text-navy-900 mb-3">{title}</h3>
      <p className="text-navy-500 text-sm leading-relaxed">{fullDesc}</p>
    </div>
  );
}

function ProcessSection() {
  const [ref, isInView] = useInView();
  const steps = [
    {
      num: "01",
      title: "Consultation",
      text: "We assess your logistics requirements and recommend the optimal solution.",
    },
    {
      num: "02",
      title: "Planning",
      text: "Our team creates a detailed logistics plan tailored to your timeline and budget.",
    },
    {
      num: "03",
      title: "Execution",
      text: "We manage every aspect of your shipment from collection to final delivery.",
    },
    {
      num: "04",
      title: "Support",
      text: "Real-time tracking and dedicated support throughout the entire journey.",
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Process"
          subtitle="A proven approach that ensures your freight is handled with the utmost care."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="text-4xl font-extrabold text-navy-900/10 mb-2">
                {step.num}
              </div>
              <h3 className="font-bold text-navy-900 mb-2">{step.title}</h3>
              <p className="text-navy-500 text-sm leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
