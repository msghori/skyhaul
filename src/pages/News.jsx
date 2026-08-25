import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import NewsCard from "../components/NewsCard";
import SectionHeading from "../components/SectionHeading";
import { newsArticles } from "../data/content";

export default function News() {
  useEffect(() => {
    document.title = "News & Insights - Skyhaul Logistics";
  }, []);

  return (
    <>
      <Helmet>
        <title>News & Insights - Skyhaul Logistics | Industry Updates</title>
        <meta
          name="description"
          content="Stay updated with the latest logistics industry news, insights, and trends from Skyhaul. Expert articles on freight, supply chain, and global logistics."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-skyblue pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=800&fit=crop"
            alt="Business analytics and logistics insights"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-skyblue/80 to-skyblue" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 animate-fade-in-up">
            News & Insights
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto animate-fade-in-up animation-delay-200">
            Stay informed with the latest trends, insights, and updates from the
            world of logistics.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedArticle article={newsArticles[0]} />
        </div>
      </section>

      {/* All Articles */}
      <section className="pb-16 sm:pb-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Latest Articles"
            subtitle="Insights and updates from our logistics experts."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, i) => (
              <NewsCard key={article.id} {...article} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FeaturedArticle({ article }) {
  const { title, category, date, excerpt, image } = article;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="rounded-2xl overflow-hidden shadow-xl shadow-navy-900/10">
        <img
          src={image}
          alt={title}
          className="w-full h-64 sm:h-80 object-cover"
          loading="lazy"
        />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-skyblue text-white text-xs font-bold rounded-full">
            {category}
          </span>
          <span className="text-navy-400 text-sm">{date}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4">
          {title}
        </h2>
        <p className="text-navy-500 leading-relaxed mb-6">{excerpt}</p>
        <button className="inline-flex items-center gap-1 text-sm font-bold text-navy-900 hover:text-gold-500 transition-colors group">
          Read Full Article
          <span className="group-hover:translate-x-1 transition-transform">
            &rarr;
          </span>
        </button>
      </div>
    </div>
  );
}
