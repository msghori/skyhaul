import useInView from "./useInView";
import { Quote } from "lucide-react";

export default function TestimonialCard({
  name,
  role,
  company,
  text,
  index = 0,
}) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 sm:p-8 border border-navy-100 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300 ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <Quote size={32} className="text-skyblue mb-4" />
      <p className="text-navy-600 text-sm leading-relaxed mb-6 italic">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-navy-50">
        <div className="w-10 h-10 rounded-full bg-skyblue flex items-center justify-center text-white font-bold text-sm shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-navy-900 text-sm">{name}</p>
          <p className="text-navy-400 text-xs">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
