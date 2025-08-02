import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-section-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-16 text-center text-section-primary-foreground">
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="font-body text-lg md:text-xl leading-relaxed text-section-primary-foreground">
                Hi, I’m Atharva — an AI Engineer crafting intelligent systems with curiosity and code.
                I build smart, scalable solutions using Large Language Models, Retrieval-Augmented Generation, and modular tools like LangChain and LangGraph. 
                Whether it’s orchestrating agent flows, experimenting with embeddings, or shipping end-to-end NLP systems — I learn fast, build independently, and think in prompts.
              </p>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-64 md:w-80 aspect-square overflow-hidden border-2 border-r  rounded-xl border-gray-medium">
                <img
                  src={profilePhoto}
                  alt="AI Engineer"
                  className="w-full h-full object-cover will-change-transform"
                  style={{
                    imageRendering: 'auto',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)', 
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
