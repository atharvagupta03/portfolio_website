const Articles = () => {
  const articles = [
    {
      title: "RAG (Retrieval-Augmented Generation): The AI World’s Best-Kept Secret Revealed",
      date: "2025-08-10",
      excerpt:
        "Discover how Retrieval-Augmented Generation (RAG) empowers AI to access your unique data like documents, FAQs, and reports making it smarter and more accurate. This article explains the why and how of RAG with simple analogies, real world use cases, and a hands on Python example to get you started.",
      link: "https://medium.com/@atharva-ai/rag-retrieval-augmented-generation-the-ai-worlds-best-kept-secret-revealed-72a9c3849a69"
    },
    {
      title: "Prompt Engineering Is a Superpower — If You Know How to Test It",
      date: "2025-08-05",
      excerpt:
        "Writing better prompts isn’t guesswork. It’s a skill you can learn and test. This article breaks down how to structure powerful prompts, evaluate responses, and iterate like a pro. Includes practical frameworks, test cases, and real examples.",
      link: "https://www.medium.com"
    }
  ];

  return (
    <section id="articles" className="py-24 bg-section-primary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl md:text-5xl mb-16 text-center text-section-primary-foreground">
          Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <article
              key={index}
              className="p-6 bg-section-secondary text-section-secondary-foreground border border-gray-medium hover:scale-[1.02] transition-all duration-300"
            >
              <div className="font-body text-xs text-muted-foreground mb-3">
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
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
                className="font-body text-sm underline font-bold hover:no-underline transition-all"
              >
                Medium Link
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
