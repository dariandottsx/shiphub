export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-primary text-center mb-8">
          Create your account
        </h1>

        <div className="space-y-6">
          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-4">
            <label className="relative flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer hover:border-primary">
              <input
                type="radio"
                name="role"
                value="technical"
                className="sr-only peer"
              />
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
              <span className="font-medium text-primary">Technical Builder</span>
              <span className="text-sm text-muted-foreground text-center">
                I have projects to showcase
              </span>
              <div className="absolute inset-0 border-2 border-primary rounded-lg opacity-0 peer-checked:opacity-100"></div>
            </label>

            <label className="relative flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer hover:border-primary">
              <input
                type="radio"
                name="role"
                value="business"
                className="sr-only peer"
              />
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
              <span className="font-medium text-primary">Business Builder</span>
              <span className="text-sm text-muted-foreground text-center">
                I want to find projects
              </span>
              <div className="absolute inset-0 border-2 border-primary rounded-lg opacity-0 peer-checked:opacity-100"></div>
            </label>
          </div>

          {/* Registration Form */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-primary mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-md bg-background text-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md bg-background text-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-primary mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md bg-background text-primary"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium"
            >
              Create Account
            </button>
          </form>

          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
} 