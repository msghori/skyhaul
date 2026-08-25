import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Target, Eye, Heart, ArrowRight, Award, Users, Globe, Truck } from 'lucide-react'
import Button from '../components/Button'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'
import SectionHeading from '../components/SectionHeading'
import useInView from '../components/useInView'
import { stats } from '../data/content'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every shipment, every interaction, and every solution we deliver.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We conduct business with honesty and transparency, building trust with every client relationship.',
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We embrace technology and creative thinking to continuously improve our logistics solutions.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We treat our clients as partners, working collaboratively to achieve shared success.',
  },
]

const team = [
  {
    name: 'Robert Anderson',
    role: 'Managing Director',
    description: 'With over 20 years in logistics, Robert leads Skyhaul with a vision for innovation and excellence.',
  },
  {
    name: 'Emma Williams',
    role: 'Head of Operations',
    description: 'Emma ensures seamless operations across all our service lines, overseeing our global logistics network.',
  },
  {
    name: 'Michael Chen',
    role: 'Business Development Director',
    description: 'Michael builds and nurtures client relationships, ensuring our services meet evolving business needs.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Customer Experience Manager',
    description: 'Sarah leads our customer support team, ensuring every client receives exceptional service.',
  },
]

export default function About() {
  useEffect(() => {
    document.title = 'About Us - Skyhaul Logistics'
  }, [])

  return (
    <>
      <Helmet>
        <title>About Us - Skyhaul Logistics | Our Story & Mission</title>
        <meta name="description" content="Learn about Skyhaul's story, mission, vision, and the team behind the UK's trusted logistics and freight solutions provider." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-skyblue pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=800&fit=crop"
            alt="Skyhaul logistics warehouse operations"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-skyblue/80 to-skyblue" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 animate-fade-in-up">About Skyhaul</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto animate-fade-in-up animation-delay-200">
            Discover the story, mission, and people behind the UK's trusted logistics partner.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <StoryContent />
            <StoryImage />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MissionVisionCard
              icon={Target}
              title="Our Mission"
              text="To provide reliable, efficient, and innovative logistics solutions that empower businesses to grow and succeed in a global marketplace. We are committed to delivering exceptional value through our expertise, technology, and unwavering dedication to customer satisfaction."
            />
            <MissionVisionCard
              icon={Eye}
              title="Our Vision"
              text="To be the UK's most trusted and respected logistics partner, known for our commitment to excellence, sustainability, and innovation. We envision a future where every shipment is seamless, every customer interaction is positive, and our operations contribute positively to the communities we serve."
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Skyhaul."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ValueCard key={v.title} {...v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Experienced professionals dedicated to your logistics success."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <TeamCard key={member.name} {...member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Choose Us */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Customers Choose Skyhaul"
            subtitle="We go beyond just moving cargo — we build lasting partnerships."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Proven Track Record', text: 'Over a decade of successful deliveries and satisfied clients across the globe.' },
              { icon: Globe, title: 'Global Network', text: 'Extensive partnerships and routes covering over 50 countries on six continents.' },
              { icon: Truck, title: 'Tailored Solutions', text: 'Every client receives a customised logistics strategy designed for their unique needs.' },
            ].map((item, i) => (
              <WhyCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <StatsSection stats={stats} />

      <CTASection
        title="Partner With Skyhaul"
        subtitle="Experience the difference of working with a logistics company that truly cares about your success."
        buttonText="Get in Touch"
      />
    </>
  )
}

function StoryContent() {
  const [ref, isInView] = useInView()

  return (
    <div ref={ref} className={isInView ? 'animate-slide-in-left' : 'opacity-0'}>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-6">Our Story</h2>
      <p className="text-navy-500 leading-relaxed mb-4">
        Founded with a clear vision to transform the logistics landscape in the United Kingdom, Skyhaul has grown from a small freight forwarding operation into a comprehensive logistics solutions provider trusted by businesses across the country and beyond.
      </p>
      <p className="text-navy-500 leading-relaxed mb-4">
        Our journey began with a simple belief: that every business deserves a logistics partner who treats their cargo as if it were their own. This philosophy has driven us to invest in cutting-edge technology, expand our global network, and recruit the finest talent in the industry.
      </p>
      <p className="text-navy-500 leading-relaxed mb-6">
        Today, we serve hundreds of businesses ranging from ambitious startups to established multinational corporations, providing end-to-end logistics solutions that include road freight, air cargo, sea shipping, warehousing, customs clearance, and supply chain management.
      </p>
      <div className="flex items-center gap-4">
        <div className="w-16 h-1 bg-gold-400 rounded-full" />
        <span className="text-sm font-bold text-navy-900">Established with Purpose</span>
      </div>
    </div>
  )
}

function StoryImage() {
  const [ref, isInView] = useInView()

  return (
    <div ref={ref} className={`relative ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
        <img
          src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop"
          alt="Skyhaul cargo ship representing global logistics capability"
          className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
          loading="lazy"
        />
      </div>
    </div>
  )
}

function MissionVisionCard({ icon: Icon, title, text }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 border border-navy-100 hover:shadow-xl transition-all duration-300 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="w-14 h-14 rounded-xl bg-skyblue group-hover:bg-gold-400/10 flex items-center justify-center mb-5 transition-colors duration-300">
        <Icon size={24} className="text-white group-hover:text-gold-500 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-4">{title}</h3>
      <p className="text-navy-500 text-sm leading-relaxed">{text}</p>
    </div>
  )
}

function ValueCard({ icon: Icon, title, description, index }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`text-center p-6 bg-white rounded-2xl border border-navy-100 hover:border-gold-400/50 hover:shadow-lg transition-all duration-300 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-14 h-14 rounded-xl bg-skyblue group-hover:bg-gold-400/10 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
        <Icon size={24} className="text-white group-hover:text-gold-500 transition-colors duration-300" />
      </div>
      <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
      <p className="text-navy-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function TeamCard({ name, role, description, index }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 border border-navy-100 hover:shadow-xl transition-all duration-300 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-16 h-16 rounded-full bg-skyblue flex items-center justify-center text-white font-extrabold text-xl mb-4">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <h3 className="font-bold text-navy-900">{name}</h3>
      <p className="text-gold-500 text-sm font-semibold mb-3">{role}</p>
      <p className="text-navy-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function WhyCard({ icon: Icon, title, text, index }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`flex gap-4 p-6 bg-white rounded-2xl border border-navy-100 hover:shadow-lg transition-all duration-300 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="w-12 h-12 rounded-xl bg-skyblue flex items-center justify-center shrink-0">
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
        <p className="text-navy-500 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  )
}
