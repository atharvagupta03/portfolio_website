const projects = [
  {
    title: 'RAG-Based Question Answering System',
    tech: ' RAG • Sentence-BERT • Generative AI',
    description:
      'Built a beginner-friendly QA system using a RAG pipeline. Used Sentence-BERT for semantic retrieval over Wikipedia docs. Explored embedding models and prompt tuning to optimize answer relevance.',
    links: [
      { name: 'View Project', url: 'https://tinyurl.com/RAG-QA-project' },
      { name: 'GitHub', url: 'https://github.com/atharvagupta03/RAG_based_QA_System' },
    ],
  },
 
  {
    title: 'Email Spam Classification System',
    tech: 'NLP • Scikit-learn • Logistic Regression',
    description:
      'Created a binary spam classifier using NLP techniques. Preprocessed emails with stemming, lemmatization, and stopword removal. Tuned a Logistic Regression model and evaluated using precision and F1-score.',
    links: [{ name: 'GitHub', url: 'https://github.com/atharvagupta03/' }],
  },
  {
    title: 'Country Health Clustering Analysis',
    tech: 'PCA • K-Means • Data Visualization',
    description:
      'Analyzed global health indicators using clustering. Normalized GDP, fertility, and mortality data. Used PCA to reduce dimensions and k-means to reveal country clusters with actionable insights.',
    links: [{ name: 'GitHub', url: 'https://github.com/atharvagupta03/' }],
  },
   {
    title: 'Shortify – Full Stack URL Shortener',
    tech: 'React • Node.js • Express.js • MongoDB',
    description:
      'Developed a full-stack app that generates short URLs from long links. Built an intuitive React frontend and a performant backend using Express and MongoDB. Designed with a clean UI for general users.',
    links: [
      { name: 'GitHub', url: 'https://github.com/atharvagupta03/shortify-backend' },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-section-foreground">
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-border rounded-2xl p-6 shadow-sm bg-card"
            >
              <h3 className="text-2xl font-semibold mb-2 text-card-foreground">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground mb-2">
                {project.tech}
              </p>
              <p className="text-base text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex gap-4 flex-wrap">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text- underline font-bold "

                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
