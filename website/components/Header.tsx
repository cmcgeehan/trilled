import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/trilledLogoFuturistic-nobg.webp"
                alt="Trilled"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--neon-orange)] transition-colors">
                Home
              </Link>
              <Link href="/team" className="text-[var(--text-secondary)] hover:text-[var(--neon-orange)] transition-colors">
                Our Team
              </Link>
              <Link href="/case-studies" className="text-[var(--text-secondary)] hover:text-[var(--neon-orange)] transition-colors">
                Case Studies
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://calendly.com/conormcgeehan/trilled-meeting" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-900 bg-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--neon-blue)]">
                Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
} 