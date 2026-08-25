import useInView from './useInView'

export default function StatsSection({ stats }) {
  const [ref, isInView] = useInView()

  return (
    <section ref={ref} className="bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-navy-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
