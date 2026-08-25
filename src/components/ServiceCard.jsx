import useInView from "./useInView";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
  children,
}) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl p-6 sm:p-8 border border-navy-100 hover:border-gold-400/50 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300 ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-14 h-14 rounded-xl bg-navy-50 group-hover:bg-gold-400/10 flex items-center justify-center mb-5 transition-colors duration-300">
        <Icon
          size={28}
          className="text-skyblue group-hover:text-gold-500 transition-colors duration-300"
        />
      </div>
      <h3 className="text-lg font-bold text-navy-900 mb-3">{title}</h3>
      <p className="text-navy-500 text-sm leading-relaxed mb-4">
        {description}
      </p>
      {children}
    </div>
  );
}
