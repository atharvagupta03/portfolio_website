const Projects = () => {
  const projects = [
    {
      name: "RAG Pipeline Framework",
      description: "A comprehensive framework for building production-ready Retrieval-Augmented Generation systems. Built with Python, LangChain, and ChromaDB. Includes document preprocessing, semantic search, and response generation with built-in evaluation metrics.",
      github: "https://github.com/username/rag-framework",
      demo: null,
      dark: false
    },
    {
      name: "LLM Fine-tuning Toolkit",
      description: "Open-source toolkit for fine-tuning large language models on custom datasets. Supports LoRA, QLoRA, and full fine-tuning approaches. Includes automated hyperparameter optimization and distributed training capabilities.",
      github: "https://github.com/username/llm-finetune",
      demo: "https://demo.example.com",
      dark: true
    },
    {
      name: "Knowledge Graph RAG",
      description: "Hybrid RAG system combining vector search with knowledge graph traversal. Implemented using Neo4j, sentence transformers, and GPT-4. Demonstrates advanced semantic reasoning for complex multi-hop questions.",
      github: "https://github.com/username/kg-rag",
      demo: null,
      dark: false
    },
    {
      name: "Multi-Agent Code Assistant",
      description: "AI-powered coding assistant using multiple specialized agents. Features code generation, review, testing, and documentation agents. Built with CrewAI framework and integrated with VS Code extension.",
      github: "https://github.com/username/multi-agent-code",
      demo: "https://marketplace.visualstudio.com/items?itemName=username.extension",
      dark: true
    }
  ];

  return (
    <section id="projects" className="py-24 bg-section-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl md:text-5xl mb-16 text-center text-section-secondary-foreground">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-8 border transition-all duration-300 hover:scale-[1.02] ${
                project.dark
                  ? 'bg-section-primary text-section-primary-foreground border-gray-dark'
                  : 'bg-section-secondary text-section-secondary-foreground border-gray-medium'
              }`}
            >
              <h3 className="font-heading font-semibold text-xl mb-4">
                {project.name}
              </h3>
              <p className="font-body text-sm leading-relaxed mb-6 opacity-90">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm underline hover:no-underline transition-all"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm underline hover:no-underline transition-all"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;