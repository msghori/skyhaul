import { useEffect, useRef, useState, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

function useCarouselLength() {
  const [length, setLength] = useState(3);
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width >= 1024) setLength(3);
      else if (width >= 640) setLength(2);
      else setLength(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return length;
}

export default function TestimonialCarousel({ reviews }) {
  const perView = useCarouselLength();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const maxIndex = Math.max(0, reviews.length - perView);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(goNext, 4500);
    return () => clearInterval(timerRef.current);
  }, [goNext, paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * (100 / perView)}%)`,
          }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="px-3 shrink-0"
              style={{ width: `${100 / perView}%` }}
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goPrev}
        aria-label="Previous testimonials"
        className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-navy-100 flex items-center justify-center text-navy-700 hover:bg-skyblue hover:text-white transition-colors duration-300 hidden sm:flex"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={goNext}
        aria-label="Next testimonials"
        className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-navy-100 flex items-center justify-center text-navy-700 hover:bg-skyblue hover:text-white transition-colors duration-300 hidden sm:flex"
      >
        <ChevronRight size={20} />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-skyblue w-7" : "bg-navy-200 hover:bg-navy-300 w-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ user, company, gb, comment, rating = 5 }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-navy-100 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300 h-full flex flex-col">
      <Quote size={32} className="text-skyblue mb-4" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < rating
                ? "fill-gold-400 text-gold-400"
                : "fill-navy-100 text-navy-100"
            }
          />
        ))}
      </div>
      <p className="text-navy-600 text-sm leading-relaxed mb-6 italic flex-1">
        &ldquo;{comment}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-navy-50">
        <div className="w-10 h-10 rounded-full bg-skyblue flex items-center justify-center text-white font-bold text-sm shrink-0">
          {user.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="font-bold text-navy-900 text-sm truncate">{user}</p>
          <p className="text-navy-500 text-xs truncate">{company}</p>
          {gb && <p className="text-navy-400 text-[10px] font-semibold">{gb}</p>}
        </div>
      </div>
    </div>
  );
}
