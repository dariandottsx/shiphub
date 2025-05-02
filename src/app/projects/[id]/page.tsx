import Link from 'next/link'

const project = {
  id: 1,
  title: "AI-Powered Content Generator",
  description: "A machine learning tool that generates high-quality blog posts and social media content using advanced natural language processing techniques. The system learns from existing content to produce engaging, SEO-optimized articles tailored to specific industries and audiences.",
  techStack: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
  tags: ["AI", "Content", "SaaS"],
  lookingFor: "Marketing & Growth",
  revenueShare: "70/30",
  author: {
    name: "Alex Chen",
    role: "Technical Builder",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  githubLink: "https://github.com/example/ai-content-gen",
  demoLink: "https://demo.ai-content-gen.com",
  screenshots: [
    "/placeholder-1.jpg",
    "/placeholder-2.jpg",
  ],
  detailedDescription: `
    Our AI-powered content generation platform leverages state-of-the-art machine learning models to create human-like content at scale. Key features include:

    - Custom training on industry-specific content
    - SEO optimization built into the generation process
    - Multi-language support
    - Content style matching
    - Automated content scheduling

    The platform is built with scalability in mind and has already processed over 10,000 articles in beta testing.
  `,
}

export default function ProjectDetail() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Screenshots */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">Screenshots</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="aspect-video bg-muted rounded-lg"></div>
                ))}
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">About the Project</h2>
              <div className="prose prose-sm max-w-none">
                {project.detailedDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-primary">Project Links</h2>
              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  GitHub Repository
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Info */}
            <div className="border rounded-lg p-6 bg-card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted"></div>
                <div>
                  <h3 className="font-medium text-primary">{project.author.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.author.role}</p>
                </div>
              </div>
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
                Contact Builder
              </button>
            </div>

            {/* Project Details */}
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="font-medium text-primary mb-4">Project Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-muted-foreground">Looking for</dt>
                  <dd className="mt-1 text-sm font-medium text-primary">
                    {project.lookingFor}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Revenue Share</dt>
                  <dd className="mt-1 text-sm font-medium text-primary">
                    {project.revenueShare} split
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Categories</dt>
                  <dd className="mt-1">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 