const Articles = () => {
  const articles = [
    {
      title: "Building Production RAG Systems: Lessons Learned",
      date: "2024-01-15",
      excerpt: "A deep dive into the challenges and solutions for deploying RAG systems at scale, including vector database optimization and prompt engineering strategies.",
      link: "#"
    },
    {
      title: "Fine-tuning LLMs: When and How",
      date: "2023-12-08",
      excerpt: "Comprehensive guide to different fine-tuning approaches, from LoRA to full parameter tuning, with practical examples and performance comparisons.",
      link: "#"
    },
    {
      title: "The Future of Multi-Modal AI",
      date: "2023-11-22",
      excerpt: "Exploring the convergence of text, image, and audio processing in large language models and the implications for next-generation AI applications.",
      link: "#"
    },
    {
      title: "Evaluating RAG Performance: Metrics That Matter",
      date: "2023-10-30",
      excerpt: "Beyond traditional metrics: How to properly evaluate retrieval-augmented generation systems using context relevance, faithfulness, and answer accuracy.",
      link: "#"
    },
    {
      title: "Open Source LLM Landscape: A Technical Overview",
      date: "2023-09-14",
      excerpt: "Comprehensive analysis of open-source language models, their capabilities, licensing considerations, and deployment strategies for enterprise use.",
      link: "#"
    },
    {
      title: "Knowledge Graphs Meet LLMs: Hybrid Approaches",
      date: "2023-08-25",
      excerpt: "Combining symbolic knowledge representation with neural language models for enhanced reasoning capabilities and factual accuracy.",
      link: "#"
    }
  ];

  return (
    <section id="articles" className="py-24 bg-section-primary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl md:text-5xl mb-16 text-center text-section-primary-foreground">
          Articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <article
              key={index}
              className="p-6 bg-section-secondary text-section-secondary-foreground border border-gray-medium hover:scale-[1.02] transition-all duration-300"
            >
              <div className="font-body text-xs text-muted-foreground mb-3">
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 leading-tight">
                {article.title}
              </h3>
              <p className="font-body text-sm leading-relaxed mb-4 opacity-90">
                {article.excerpt}
              </p>
              <a
                href={article.link}
                className="font-body text-sm underline hover:no-underline transition-all"
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;