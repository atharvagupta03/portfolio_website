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
                I'm an AI Engineer focused on Generative AI, LLMs, and RAG pipelines. 
                I enjoy solving complex NLP problems and building scalable, open-source solutions. 
                I often write and publish practical guides, tutorials, and explorations in the AI space, 
                contributing to the community's understanding of cutting-edge language technologies.
              </p>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="AI Engineer"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover grayscale border border-gray-medium"
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