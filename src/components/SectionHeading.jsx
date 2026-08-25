import useInView from './useInView'

export default function SectionHeading({ title, subtitle, center = true, light = false, className = '' }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`mb-12 ${center ? 'text-center' : ''} ${isInView ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}
    >
      <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-navy-300' : 'text-navy-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
