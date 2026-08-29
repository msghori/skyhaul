import { useEffect, useState } from "react";
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
  Star,
} from "lucide-react";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import TestimonialCarousel from "../components/TestimonialCarousel";
import CTASection from "../components/CTASection";
import SectionHeading from "../components/SectionHeading";
import useInView from "../components/useInView";
import {
  services,
  reviews,
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

      {/* Hero Carousel */}
      <HeroCarousel />

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

      {/* About Section */}
      <AboutSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Real feedback from businesses across the UK and beyond."
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 min-w-0">
            <div className="min-w-0">
              <TestimonialCarousel reviews={reviews} />
            </div>
            <div className="flex items-start">
              <RatingBadge reviews={reviews} />
            </div>
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

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      type: "video",
      src: "video/a.mp4",
      heading: "Skyhaul In Motion",
      title: "See Us In Action",
      sub: "Watch how we manage end-to-end logistics — from warehouse operations to final delivery.",
    },
    {
      type: "image",
      bg: "images/slide-truck.jpg",
      alt: "Truck transporting goods on road",
      heading: "Reliable Transport Network",
      title: "Transport & Logistics",
      sub: "Nationwide road freight and transport logistics. Real-time GPS tracking, scheduled routes, and reliable fleet management.",
    },
    {
      type: "image",
      bg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop",
      alt: "Worker loading goods into truck",
      heading: "Moving Your Business Forward",
      title: "Loading & Delivery",
      sub: "Efficient loading and last-mile delivery solutions. Our trained teams handle every shipment with care, ensuring goods are safely loaded and delivered on time.",
    },
    {
      type: "image",
      bg: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=1080&fit=crop",
      alt: "Warehouse storage facility",
      heading: "Smart Warehousing Solutions",
      title: "Warehouse & Storage",
      sub: "State-of-the-art warehousing with secure storage, inventory management, and seamless distribution across the UK.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-skyblue">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {slide.type === "image" ? (
            <img
              src={slide.bg}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-navy-900/50" />
        </div>
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
        <div className="max-w-2xl">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white backdrop-blur-sm rounded-full text-gold-400 text-sm font-semibold mb-6 transition-all duration-500 ${
              isAnimating
                ? "opacity-0 translate-x-8"
                : "opacity-100 translate-x-0"
            }`}
          >
            <Shield size={14} />
            Trusted UK Logistics Partner
          </div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2 transition-all duration-500 delay-100 ${
              isAnimating
                ? "opacity-0 translate-x-12"
                : "opacity-100 translate-x-0"
            }`}
          >
            {slides[currentSlide].heading}
          </h1>
          <h2
            className={`text-xl sm:text-2xl font-bold text-gold-400 mb-6 transition-all duration-500 delay-200 ${
              isAnimating
                ? "opacity-0 translate-x-16"
                : "opacity-100 translate-x-0"
            }`}
          >
            {slides[currentSlide].title}
          </h2>
          <p
            className={`text-lg text-white/90 leading-relaxed mb-8 max-w-lg transition-all duration-500 delay-300 ${
              isAnimating
                ? "opacity-0 translate-x-16"
                : "opacity-100 translate-x-0"
            }`}
          >
            {slides[currentSlide].sub}
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 delay-[400ms] ${
              isAnimating
                ? "opacity-0 translate-x-20"
                : "opacity-100 translate-x-0"
            }`}
          >
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gold-400 w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
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
                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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

function RatingBadge({ reviews }) {
  const [ref, isInView] = useInView();
  const total = reviews.reduce((sum, r) => sum + (r.rating || 0), 0);
  const avg = total / reviews.length;

  return (
    <div
      ref={ref}
      className={`flex lg:flex-col items-center justify-center gap-4 bg-navy-950 text-white rounded-2xl p-6 sm:p-8 text-center ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div>
        <p className="text-2xl sm:text-3xl font-extrabold mb-2">Excellent</p>
        <div className="flex gap-1 justify-center mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={20} className="fill-gold-400 text-gold-400" />
          ))}
        </div>
      </div>
      <div>
        <p className="text-4xl sm:text-5xl font-extrabold text-gold-400 mb-1">
          {avg.toFixed(1) === "5.0" ? "4.9" : avg.toFixed(1)}
        </p>
        <p className="text-sm text-white/80">
          Average Rating from {reviews.length} Reviews
        </p>
      </div>
    </div>
  );
}
