import { Link } from 'react-router-dom'
import useInView from './useInView'

export default function CTASection({ title, subtitle, buttonText, buttonTo = '/contact' }) {
  const [ref, isInView] = useInView()

  return (
    <section
      ref={ref}
      className="relative bg-skyblue overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{title}</h2>
        {subtitle && <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">{subtitle}</p>}
        <Link
          to={buttonTo}
          className="inline-flex items-center px-8 py-4 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold text-base rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-gold-400/25 active:scale-[0.97]"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
