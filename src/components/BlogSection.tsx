import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";

interface BlogSectionProps {
  variant?: "fn" | "cit";
}

const BlogSection = ({ variant = "fn" }: BlogSectionProps) => {
  const fnPosts = [
    {
      title: "2025 Cybersecurity Trends and Predictions",
      excerpt: "Learn about the evolving threat landscape and how to prepare your business for emerging security challenges.",
      category: "Security",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    },
    {
      title: "Mastering the Art of Business Technology",
      excerpt: "Discover how strategic IT investments can transform your operations and drive competitive advantage.",
      category: "Strategy",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    },
    {
      title: "Automation: Best Practices for Small Businesses",
      excerpt: "Step-by-step guide to implementing automation that saves time and reduces operational costs.",
      category: "Automation",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    },
  ];

  const citPosts = [
    {
      title: "5 Key Steps for Implementing a Successful IT Disaster Recovery Plan",
      excerpt: "Protect your business with a comprehensive disaster recovery strategy that ensures business continuity.",
      category: "Disaster Recovery",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=600&h=400&fit=crop",
    },
    {
      title: "Disaster Recovery Planning for Financial Services",
      excerpt: "Specialized guidance for financial institutions ensuring regulatory compliance and data protection.",
      category: "Finance",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    },
    {
      title: "Unlocking the Power of Data With Power BI Consulting",
      excerpt: "Transform raw data into actionable business intelligence with advanced analytics solutions.",
      category: "Analytics",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
  ];

  const posts = variant === "fn" ? fnPosts : citPosts;

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold uppercase tracking-wider ${
            variant === "fn" ? "text-fn-primary" : "text-cit-primary"
          }`}>
            {variant === "fn" ? "IT Industry Blog" : "Industry Insights"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mt-4 mb-6">
            {variant === "fn" ? "Topics and Trends from the World of Technology" : "Latest Insights & Resources"}
          </h2>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                variant={variant}
                hover="lift"
                padding="none"
                className="h-full overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    variant === "fn"
                      ? "bg-gradient-to-t from-fn-primary/50 to-transparent"
                      : "bg-gradient-to-t from-cit-primary/50 to-transparent"
                  }`} />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white ${
                    variant === "fn" ? "bg-fn-primary" : "bg-cit-primary"
                  }`}>
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold font-heading mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{post.readTime}</span>
                    <span className={`font-medium ${
                      variant === "fn" ? "text-fn-primary" : "text-cit-primary"
                    }`}>
                      Read More →
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
