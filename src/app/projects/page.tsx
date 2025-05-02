import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: "AI-Powered Content Generator",
    description: "A machine learning tool that generates high-quality blog posts and social media content.",
    techStack: ["Python", "TensorFlow", "React"],
    tags: ["AI", "Content", "SaaS"],
    lookingFor: "Marketing & Growth",
    revenueShare: "70/30",
    author: "Alex Chen",
  },
  // Add more sample projects here
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-primary">Filters</h2>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Categories</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-sm">AI & Machine Learning</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-sm">Web Development</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-sm">Mobile Apps</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Tech Stack</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-sm">React</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-sm">Python</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-sm">Node.js</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-primary">Available Projects</h1>
            <div className="flex items-center space-x-4">
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>Most Recent</option>
                <option>Most Popular</option>
                <option>Revenue Share</option>
              </select>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="block group"
              >
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-card">
                  <h3 className="text-lg font-semibold text-primary group-hover:text-primary/90">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      Looking for: {project.lookingFor}
                    </div>
                    <div className="text-sm font-medium text-primary">
                      {project.revenueShare}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
} 