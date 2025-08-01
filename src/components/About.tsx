const About = () => {
  return (
    <section id="about" className="py-24 bg-section-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-12 text-section-primary-foreground">
            About Me
          </h2>
          <p className="font-body text-lg md:text-xl leading-relaxed text-section-primary-foreground">
            I'm an AI Engineer focused on Generative AI, LLMs, and RAG pipelines. 
            I enjoy solving complex NLP problems and building scalable, open-source solutions. 
            I often write and publish practical guides, tutorials, and explorations in the AI space, 
            contributing to the community's understanding of cutting-edge language technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;