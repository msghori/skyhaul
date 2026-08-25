import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Globe,
  Headphones,
  BarChart3,
  Clock,
  Users,
  Truck,
  ArrowRightCircle,
} from "lucide-react";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";
import useInView from "../components/useInView";
import {
  services,
  testimonials,
  stats,
  whyChooseUs,
  howItWorks,
} from "../data/content";

const featureIcons = [Truck, Clock, Users, Globe, BarChart3, Headphones];

export default function Home() {
  useEffect(() => {
    document.title = "Skyhaul - Premium Logistics & Freight Solutions";
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Skyhaul - Moving Your Business Forward | UK Logistics & Freight
        </title>
        <meta
          name="description"
          content="Skyhaul provides premium logistics, freight forwarding, and supply chain solutions across the UK and 50+ countries. Road, air, sea freight with real-time tracking."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-skyblue">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop"
            alt="Modern logistics warehouse with cargo operations"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-skyblue" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white backdrop-blur-sm rounded-full text-gold-400 text-sm font-semibold mb-6 animate-fade-in">
              <Shield size={14} />
              Trusted UK Logistics Partner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
              Moving Your
              <span className="text-white block">Business Forward</span>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg animate-fade-in-up animation-delay-200">
              Reliable logistics and freight solutions connecting the UK to the
              world. From road and air freight to complete supply chain
              management, we deliver with precision, speed, and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Button to="/contact" size="lg">
                Get a Quote
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button to="/services" variant="outline-white" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Quick Quote Banner */}
      <section className="relative -mt-10 z-10 mb-16 hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/10 p-6 sm:p-8 border border-navy-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs font-bold text-navy-500 uppercase tracking-wider mb-1.5">
                  From
                </label>
                <input
                  type="text"
                  placeholder="Pickup location"
                  className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy-500 uppercase tracking-wider mb-1.5">
                  To
                </label>
                <input
                  type="text"
                  placeholder="Delivery location"
                  className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy-500 uppercase tracking-wider mb-1.5">
                  Service
                </label>
                <select className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-lg text-sm text-navy-900 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all appearance-none">
                  <option>All Services</option>
                  <option>Road Freight</option>
                  <option>Air Freight</option>
                  <option>Sea Freight</option>
                  <option>Express Delivery</option>
                </select>
              </div>
              <Button to="/contact" className="w-full">
                Get a Free Quote
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Skyhaul"
            subtitle="We combine industry expertise, advanced technology, and unwavering commitment to deliver exceptional logistics solutions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = featureIcons[i];
              return (
                <FeatureCard key={item.title} {...item} Icon={Icon} index={i} />
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive logistics solutions tailored to meet your specific business needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i}>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-sm font-bold text-navy-900 hover:text-gold-500 transition-colors group/link"
                >
                  Learn More
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </ServiceCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/services" variant="outline">
              View All Services
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection stats={stats} />

      {/* About Section */}
      <AboutSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Trusted by businesses across the UK and beyond."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Move Your Cargo?"
        subtitle="Get in touch today and discover how Skyhaul can streamline your logistics operations."
        buttonText="Get a Quote"
      />
    </>
  );
}

function FeatureCard({ title, description, Icon, index }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`group flex gap-4 p-6 bg-white rounded-2xl border border-navy-100 hover:border-gold-400/50 hover:shadow-lg hover:shadow-navy-900/5 transition-all duration-300 ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-12 h-12 rounded-xl bg-skyblue group-hover:bg-gold-400/10 flex items-center justify-center shrink-0 transition-colors duration-300">
        <Icon
          size={24}
          className="text-white group-hover:text-gold-500 transition-colors duration-300"
        />
      </div>
      <div>
        <h3 className="font-bold text-navy-900 mb-1">{title}</h3>
        <p className="text-navy-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function AboutSection() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isInView ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop"
                alt="Skyhaul logistics team managing freight operations"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-skyblue text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-3xl font-extrabold text-white">10+</div>
              <div className="text-sm text-white/80">Years of Excellence</div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-6">
              Your Trusted Logistics Partner in the UK
            </h2>
            <p className="text-navy-500 leading-relaxed mb-4">
              Skyhaul has been providing premium logistics and freight solutions
              to businesses across the United Kingdom and around the globe. Our
              commitment to reliability, innovation, and customer service has
              made us a trusted name in the industry.
            </p>
            <p className="text-navy-500 leading-relaxed mb-8">
              With a network spanning over 50 countries and a team of
              experienced logistics professionals, we handle everything from
              single parcel deliveries to complex supply chain management,
              ensuring your cargo reaches its destination safely and on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/about">Learn More About Us</Button>
              <Button to="/contact" variant="ghost">
                Contact Us
                <ArrowRightCircle size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-24 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          subtitle="A simple, streamlined process from quote to delivery."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {howItWorks.map((item) => (
            <HowItWorksStep key={item.step} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksStep({ step, title, description }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`text-center ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div className="w-14 h-14 rounded-full bg-skyblue text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
        {step}
      </div>
      <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
      <p className="text-navy-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
