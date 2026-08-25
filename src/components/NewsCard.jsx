import { Link } from 'react-router-dom'
import useInView from './useInView'

export default function NewsCard({ title, category, date, excerpt, image, index = 0 }) {
  const [ref, isInView] = useInView()

  return (
    <article
      ref={ref}
      className={`group bg-white rounded-2xl overflow-hidden border border-navy-100 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-skyblue/90 text-white text-xs font-bold rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-navy-400 text-xs font-medium mb-2">{date}</p>
        <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-navy-500 text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
        <Link
          to="/news"
          className="inline-flex items-center gap-1 text-sm font-bold text-navy-900 hover:text-gold-500 transition-colors group/link"
        >
          Read More
          <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>
    </article>
  )
}
