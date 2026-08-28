import {
  Truck,
  Plane,
  Ship,
  PackageCheck,
  Warehouse,
  Link2,
  Zap,
  FileCheck,
  MapPin,
} from "lucide-react";

export const services = [
  {
    id: "road-freight",
    icon: Truck,
    title: "Road Freight",
    shortDesc:
      "Comprehensive road transport solutions across the UK and Europe with full-load and part-load options.",
    fullDesc:
      "Our road freight services cover the entire United Kingdom and extend across Europe. Whether you need full-load, part-load, or groupage services, our fleet and network of trusted partners ensure your cargo arrives on time and in perfect condition. We handle everything from single pallets to full truckloads with real-time GPS tracking.",
  },
  {
    id: "freight-forwarding",
    icon: Link2,
    title: "Freight Forwarding",
    shortDesc:
      "Expert freight forwarding services managing your shipments from origin to destination.",
    fullDesc:
      "As experienced freight forwarders, we coordinate every aspect of your supply chain. From booking and documentation to insurance and tracking, our team ensures seamless movement of your goods across international borders with complete transparency.",
  },
  {
    id: "warehousing",
    icon: Warehouse,
    title: "Warehousing",
    shortDesc:
      "Secure, strategically located warehousing and distribution facilities across the UK.",
    fullDesc:
      "Our modern warehousing facilities offer secure storage, inventory management, pick-and-pack services, and distribution solutions. Strategically located near major transport hubs, our warehouses provide the flexibility your business needs to scale efficiently.",
  },
];

export const testimonials = [
  {
    name: "James Mitchell",
    role: "Supply Chain Director",
    company: "Meridian Foods Ltd",
    text: "Skyhaul transformed our supply chain operations. Their attention to detail and commitment to on-time delivery has been exceptional. We have reduced our logistics costs by 18% since partnering with them.",
  },
  {
    name: "Sarah Thompson",
    role: "Operations Manager",
    company: "Brittany Imports",
    text: "We have been using Skyhaul for our European road freight for over three years. Their tracking system gives us complete visibility, and their customer support team is always responsive and helpful.",
  },
  {
    name: "David Chen",
    role: "CEO",
    company: "TechVault Solutions",
    text: "For our high-value electronics shipments, we needed a logistics partner we could trust completely. Skyhaul has consistently delivered our products safely and on time to customers across the globe.",
  },
];

export const reviews = [
  {
    user: "Rob B",
    company: "CARGO 2 GO (UK) LTD",
    gb: "GB 12557",
    rating: 5,
    comment: "First class service",
  },
  {
    user: "Jamil Ahmad",
    company: "CHOICE COURIER LTD",
    gb: "GB 122908",
    rating: 5,
    comment: "Excellent service, Will definitely use them again",
  },
  {
    user: "Andreea Nedelcu",
    company: "DESPATCH PRO SERVICES LTD",
    gb: "GB 244312",
    rating: 4,
    comment: "Completed the job as requested.",
  },
  {
    user: "Joanne Traffic 4",
    company: "Ultimate Express",
    gb: "GB 35572",
    rating: 4,
    comment: "EXCELLENT SERVICE AS USUAL WOULD HIGHLY RECOMMEND",
  },
  {
    user: "radhika devda",
    company: "KOMAL RADHIKA LOGISTICS LTD",
    gb: "GB 267148",
    rating: 5,
    comment:
      "Really appreciate the driver's hard work and support. Your feedback is much appreciated.",
  },
  {
    user: "PAUL TIPLADY",
    company: "NG TRANSPORT LTD",
    gb: "GB 70188",
    rating: 4,
    comment: "GREAT JOB THANK YOU",
  },
  {
    user: "Simona Stoica",
    company: "S Y D S Limited",
    gb: "GB 52284",
    rating: 5,
    comment: "Excellent service. Great communication. Many thanks.",
  },
  {
    user: "Mo Makkan",
    company: "FREIGHT POINT TRANSPORT & LOGISTICS LTD",
    gb: "GB 272374",
    rating: 4,
    comment: "ALWAYS A PLEASURE TO WORK WITH GUY WOULD WORK FOR AGAIN",
  },
  {
    user: "Shannon Walker-Flynn",
    company: "Speedy Freight - Blackburn",
    gb: "GB 66650",
    rating: 5,
    comment:
      "Great driver, very helpful and kept well updated through-out. Thank you.",
  },
  {
    user: "Amber Wood",
    company: "Speedy Freight - Blackburn",
    gb: "GB 66650",
    rating: 5,
    comment: "Reliable and competent. Would use again and recommend!",
  },
  {
    user: "MICHAEL JOHN BRIDGES",
    company: "A2Z DIRECT LIMITED",
    gb: "GB 70627",
    rating: 5,
    comment: "excellent service many thanks great job would well recommend....",
  },
  {
    user: "Joe Schofield",
    company: "Speedy Freight - Bolton",
    gb: "GB 135174",
    rating: 5,
    comment: "Fantastic service, would highly recommend!",
  },
  {
    user: "IBRAHIM MOHAMMED SHAFI",
    company: "SPEED DROP",
    gb: "GB 135644",
    rating: 5,
    comment: "Great job would use again",
  },
  {
    user: "Muhammad Khan",
    company: "TK10 LOGISTICS LTD",
    gb: "GB 271048",
    rating: 5,
    comment:
      "Fantastic service and great communication. Highly recommended. I would happily work with them again",
  },
  {
    user: "Alfie Anckaert",
    company: "SYNERGIX SAMEDAY SOLUTIONS LIMITED",
    gb: "GB 207626",
    rating: 5,
    comment:
      "Brilliant driver, great communication and all round service excellent",
  },
  {
    user: "STEPHEN MARTIN LITTLETON",
    company: "UK Today Midlands Ltd",
    gb: "GB 140968",
    rating: 5,
    comment: "VERY HELPFUL & POLITE DRIVER. HIGHLY RECOMMENDED",
  },
  {
    user: "MICHAEL JOHN BRIDGES",
    company: "A2Z DIRECT LIMITED",
    gb: "GB 70627",
    rating: 5,
    comment: "great job many thanks",
  },
  {
    user: "Rob B",
    company: "CARGO 2 GO (UK) LTD",
    gb: "GB 12557",
    rating: 5,
    comment: "Excellent job",
  },
  {
    user: "Joanne Traffic 4",
    company: "Ultimate Express",
    gb: "GB 35572",
    rating: 5,
    comment:
      "EXCELLENT SERVICE AS USUAL WOULD HIGHLY RECOMMEND. PAYMENT FEEDBACK WOULD BE MUCH APPRECIATED THANKS",
  },
  {
    user: "radhika devda",
    company: "KOMAL RADHIKA LOGISTICS LTD",
    gb: "GB 267148",
    rating: 5,
    comment:
      "Really appreciate the driver's hard work and support. Your feedback is much appreciated.",
  },
  {
    user: "Indya Whitehall",
    company: "GREEN SPEED COURIERS LTD",
    gb: "GB 242138",
    rating: 5,
    comment: "5-star rating",
  },
  {
    user: "Trevor hesketh",
    company: "A couriers",
    gb: "GB 140832",
    rating: 5,
    comment: "Great service thank you!!",
  },
  {
    user: "Will Stocking",
    company: "SYNERGIX SAMEDAY SOLUTIONS LIMITED",
    gb: "GB 20",
    rating: 5,
    comment: "EXCELLENT SERVICE",
  },
  {
    user: "Chelsea Williams",
    company: "FAST TURNAROUND LOGISTICS LTD",
    gb: "GB 185",
    rating: 5,
    comment: "Great service, thank you!",
  },
  {
    user: "Joanne Traffic 4",
    company: "Ultimate Express",
    gb: "GB 35572",
    rating: 5,
    comment:
      "EXCELLENT SERVICE AS USUAL WOULD HIGHLY RECOMMEND. PAYMENT FEEDBACK WOULD BE MUCH APPRECIATED THANKS",
  },
];

export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "10,000+", label: "Deliveries Completed" },
  { value: "98%", label: "Customer Satisfaction" },
];

export const newsArticles = [
  {
    id: 1,
    title: "How Technology Is Transforming Global Logistics",
    category: "Technology",
    date: "15 August 2026",
    excerpt:
      "From AI-powered route optimisation to blockchain-based supply chain transparency, discover how cutting-edge technology is reshaping the logistics industry and creating new opportunities for businesses worldwide.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    title: "The Future of Sustainable Freight Transportation",
    category: "Sustainability",
    date: "28 July 2026",
    excerpt:
      "As environmental concerns grow, the freight industry is embracing electric vehicles, alternative fuels, and carbon-neutral shipping options. Learn how sustainability is becoming a key driver of logistics decisions.",
    image:
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    title: "5 Ways to Improve Your Supply Chain Efficiency",
    category: "Supply Chain",
    date: "10 July 2026",
    excerpt:
      "Optimising your supply chain can lead to significant cost savings and improved customer satisfaction. Here are five proven strategies that leading businesses are implementing today.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    title: "Why Real-Time Shipment Tracking Matters",
    category: "Operations",
    date: "22 June 2026",
    excerpt:
      "In today's fast-paced business environment, real-time visibility into your shipments is no longer a luxury. Discover why leading companies are investing in advanced tracking solutions.",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=500&fit=crop",
  },
];

export const whyChooseUs = [
  {
    title: "Reliable Delivery",
    description:
      "Consistent, on-time deliveries you can count on, every single time.",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Full visibility into your shipments with our advanced GPS tracking system.",
  },
  {
    title: "Experienced Team",
    description:
      "Decades of logistics expertise across all modes of freight transport.",
  },
  {
    title: "Global Coverage",
    description:
      "Extensive network spanning over 50 countries across six continents.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Premium services at fair rates with transparent, no-hidden-fees pricing.",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer support whenever you need assistance.",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Request a Quote",
    description:
      "Tell us about your shipment requirements and receive a competitive quote.",
  },
  {
    step: 2,
    title: "Plan Your Shipment",
    description:
      "We create a tailored logistics plan optimised for your needs.",
  },
  {
    step: 3,
    title: "We Collect Your Cargo",
    description: "Our team collects your goods from your specified location.",
  },
  {
    step: 4,
    title: "Track Your Shipment",
    description:
      "Monitor your cargo in real time through our tracking platform.",
  },
  {
    step: 5,
    title: "Safe Delivery",
    description: "Your cargo arrives safely at its destination, on time.",
  },
];
