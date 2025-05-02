import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Connect. Build. Launch.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The marketplace where technical builders meet business visionaries.
              Transform side projects into successful ventures.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/register"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get Started
              </Link>
              <Link
                href="/projects"
                className="text-sm font-semibold leading-6 text-muted-foreground hover:text-primary"
              >
                Browse Projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mt-32 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative p-6 bg-card rounded-lg shadow-sm">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary">For Technical Builders</h3>
                <p className="mt-2 text-muted-foreground">
                  Showcase your projects and find the perfect business partner to help bring them to market.
                </p>
              </div>
            </div>
            <div className="relative p-6 bg-card rounded-lg shadow-sm">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary">For Business Minds</h3>
                <p className="mt-2 text-muted-foreground">
                  Discover promising technical projects and collaborate with skilled developers to create successful ventures.
                </p>
              </div>
            </div>
            <div className="relative p-6 bg-card rounded-lg shadow-sm">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary">Smart Collaboration</h3>
                <p className="mt-2 text-muted-foreground">
                  Define clear revenue sharing agreements and communicate effectively through our built-in tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
