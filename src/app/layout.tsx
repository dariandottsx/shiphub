import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShipHub - Connect Technical Builders with Business Minds",
  description: "A marketplace for technical builders and business visionaries to collaborate and launch successful ventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {/* Navigation */}
          <nav className="border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <Link href="/" className="text-2xl font-bold text-primary">
                    ShipHub
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center space-x-4">
                    <Link
                      href="/projects"
                      className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Browse Projects
                    </Link>
                    <Link
                      href="/dashboard"
                      className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/login"
                      className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {children}
          
          {/* Footer */}
          <footer className="border-t">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  © 2024 ShipHub. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                    About
                  </Link>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                    Terms
                  </Link>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                    Privacy
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
