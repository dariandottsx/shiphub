"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <div className="rounded-lg border bg-card p-8">
          <h2 className="text-2xl font-bold text-center text-primary mb-8">
            Login to ShipHub
          </h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-muted-foreground mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
