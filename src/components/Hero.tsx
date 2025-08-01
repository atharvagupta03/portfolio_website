const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-section-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-section-secondary-foreground">
          AI Engineer
        </h1>
        <div className="font-heading font-medium text-xl md:text-2xl mb-8 text-section-secondary-foreground">
          LLMs • RAG Systems • GenAI
        </div>
        <p className="font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
          I design and deploy intelligent systems using Large Language Models and 
          Retrieval-Augmented Generation. Building scalable, open-source solutions 
          for complex NLP problems.
        </p>
      </div>
    </section>
  );
};

export default Hero;