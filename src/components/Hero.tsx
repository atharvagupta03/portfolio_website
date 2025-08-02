
import { motion } from 'framer-motion';

const skills = [
  'LLMs',
  'RAG Pipelines',
  'LangChain',
  'LangGraph',
  'Prompt Engineering',
  'Embeddings',
  'NLP Systems',
];

const tagVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-section-secondary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-section-secondary-foreground">
          AI Engineer
        </h1>

        {/* Skills Row with bullets */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-section-secondary-foreground font-semibold text-base md:text-lg mb-8">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={tagVariants}
              className="flex items-center"
            >
              <span>{skill}</span>
              {i < skills.length - 1 && (
                <span className="mx-2 text-sm md:text-base">•</span>
              )}
            </motion.span>
          ))}
        </div>

        <p className="font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
          I explore how language models can think, retrieve, and solve. With LangChain, RAG pipelines, and self-learning, I turn abstract ideas into intelligent systems that work in the real world.
        </p>
      </div>
    </section>
  );
};

export default Hero;


