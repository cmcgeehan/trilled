import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[var(--neon-blue)]">
              Trilled
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
            <Button className="bg-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/90 text-gray-900 font-medium">
                Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
} 