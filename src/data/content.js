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
} from 'lucide-react'

export const services = [
  {
    id: 'road-freight',
    icon: Truck,
    title: 'Road Freight',
    shortDesc: 'Comprehensive road transport solutions across the UK and Europe with full-load and part-load options.',
    fullDesc: 'Our road freight services cover the entire United Kingdom and extend across Europe. Whether you need full-load, part-load, or groupage services, our fleet and network of trusted partners ensure your cargo arrives on time and in perfect condition. We handle everything from single pallets to full truckloads with real-time GPS tracking.',
  },
  {
    id: 'air-freight',
    icon: Plane,
    title: 'Air Freight',
    shortDesc: 'Fast and reliable air cargo services for time-sensitive and high-value shipments worldwide.',
    fullDesc: 'When speed matters, our air freight solutions deliver. We offer express, standard, and consolidated air cargo services to destinations worldwide. Our partnerships with major airlines and cargo carriers mean competitive rates and guaranteed space on even the busiest routes.',
  },
  {
    id: 'sea-freight',
    icon: Ship,
    title: 'Sea Freight',
    shortDesc: 'Cost-effective ocean shipping for bulk cargo with FCL and LCL options globally.',
    fullDesc: 'For cost-effective international shipping, our sea freight services offer both Full Container Load (FCL) and Less than Container Load (LCL) options. We manage all port logistics, documentation, and customs requirements to ensure smooth transit from origin to destination.',
  },
  {
    id: 'freight-forwarding',
    icon: Link2,
    title: 'Freight Forwarding',
    shortDesc: 'Expert freight forwarding services managing your shipments from origin to destination.',
    fullDesc: 'As experienced freight forwarders, we coordinate every aspect of your supply chain. From booking and documentation to insurance and tracking, our team ensures seamless movement of your goods across international borders with complete transparency.',
  },
  {
    id: 'warehousing',
    icon: Warehouse,
    title: 'Warehousing',
    shortDesc: 'Secure, strategically located warehousing and distribution facilities across the UK.',
    fullDesc: 'Our modern warehousing facilities offer secure storage, inventory management, pick-and-pack services, and distribution solutions. Strategically located near major transport hubs, our warehouses provide the flexibility your business needs to scale efficiently.',
  },
  {
    id: 'supply-chain',
    icon: PackageCheck,
    title: 'Supply Chain Management',
    shortDesc: 'End-to-end supply chain optimisation tailored to your business requirements.',
    fullDesc: 'We provide comprehensive supply chain management solutions that streamline your operations from procurement to final delivery. Our team analyses your current processes and implements efficient strategies that reduce costs and improve delivery performance.',
  },
  {
    id: 'express-delivery',
    icon: Zap,
    title: 'Express Delivery',
    shortDesc: 'Urgent and time-critical delivery services with same-day and next-day options.',
    fullDesc: 'When you need it there fast, our express delivery service provides guaranteed time-definite options including same-day, next-day, and timed deliveries. Available for both domestic and international shipments, with dedicated courier options for high-priority cargo.',
  },
  {
    id: 'customs-clearance',
    icon: FileCheck,
    title: 'Customs Clearance',
    shortDesc: 'Professional customs brokerage and clearance services for smooth import and export.',
    fullDesc: 'Navigating customs regulations can be complex. Our licensed customs brokers handle all import and export documentation, tariff classifications, duty calculations, and compliance requirements to ensure your shipments clear customs quickly and without issues.',
  },
  {
    id: 'last-mile',
    icon: MapPin,
    title: 'Last-Mile Delivery',
    shortDesc: 'Efficient final-mile delivery solutions ensuring packages reach their destination on time.',
    fullDesc: 'The final mile is often the most critical. Our last-mile delivery solutions combine advanced route optimisation, real-time tracking, and proof-of-delivery technology to ensure your customers receive their goods promptly and professionally.',
  },
]

export const testimonials = [
  {
    name: 'James Mitchell',
    role: 'Supply Chain Director',
    company: 'Meridian Foods Ltd',
    text: 'Skyhaul transformed our supply chain operations. Their attention to detail and commitment to on-time delivery has been exceptional. We have reduced our logistics costs by 18% since partnering with them.',
  },
  {
    name: 'Sarah Thompson',
    role: 'Operations Manager',
    company: 'Brittany Imports',
    text: 'We have been using Skyhaul for our European road freight for over three years. Their tracking system gives us complete visibility, and their customer support team is always responsive and helpful.',
  },
  {
    name: 'David Chen',
    role: 'CEO',
    company: 'TechVault Solutions',
    text: 'For our high-value electronics shipments, we needed a logistics partner we could trust completely. Skyhaul has consistently delivered our products safely and on time to customers across the globe.',
  },
]

export const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Countries Served' },
  { value: '10,000+', label: 'Deliveries Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
]

export const newsArticles = [
  {
    id: 1,
    title: 'How Technology Is Transforming Global Logistics',
    category: 'Technology',
    date: '15 August 2026',
    excerpt: 'From AI-powered route optimisation to blockchain-based supply chain transparency, discover how cutting-edge technology is reshaping the logistics industry and creating new opportunities for businesses worldwide.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
  },
  {
    id: 2,
    title: 'The Future of Sustainable Freight Transportation',
    category: 'Sustainability',
    date: '28 July 2026',
    excerpt: 'As environmental concerns grow, the freight industry is embracing electric vehicles, alternative fuels, and carbon-neutral shipping options. Learn how sustainability is becoming a key driver of logistics decisions.',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&h=500&fit=crop',
  },
  {
    id: 3,
    title: '5 Ways to Improve Your Supply Chain Efficiency',
    category: 'Supply Chain',
    date: '10 July 2026',
    excerpt: 'Optimising your supply chain can lead to significant cost savings and improved customer satisfaction. Here are five proven strategies that leading businesses are implementing today.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop',
  },
  {
    id: 4,
    title: 'Why Real-Time Shipment Tracking Matters',
    category: 'Operations',
    date: '22 June 2026',
    excerpt: 'In today\'s fast-paced business environment, real-time visibility into your shipments is no longer a luxury. Discover why leading companies are investing in advanced tracking solutions.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=500&fit=crop',
  },
]

export const whyChooseUs = [
  {
    title: 'Reliable Delivery',
    description: 'Consistent, on-time deliveries you can count on, every single time.',
  },
  {
    title: 'Real-Time Tracking',
    description: 'Full visibility into your shipments with our advanced GPS tracking system.',
  },
  {
    title: 'Experienced Team',
    description: 'Decades of logistics expertise across all modes of freight transport.',
  },
  {
    title: 'Global Coverage',
    description: 'Extensive network spanning over 50 countries across six continents.',
  },
  {
    title: 'Competitive Pricing',
    description: 'Premium services at fair rates with transparent, no-hidden-fees pricing.',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer support whenever you need assistance.',
  },
]

export const howItWorks = [
  { step: 1, title: 'Request a Quote', description: 'Tell us about your shipment requirements and receive a competitive quote.' },
  { step: 2, title: 'Plan Your Shipment', description: 'We create a tailored logistics plan optimised for your needs.' },
  { step: 3, title: 'We Collect Your Cargo', description: 'Our team collects your goods from your specified location.' },
  { step: 4, title: 'Track Your Shipment', description: 'Monitor your cargo in real time through our tracking platform.' },
  { step: 5, title: 'Safe Delivery', description: 'Your cargo arrives safely at its destination, on time.' },
]
