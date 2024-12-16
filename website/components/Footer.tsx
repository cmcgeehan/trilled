import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-[var(--neon-blue)] tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/about" className="text-[var(--text-secondary)] hover:text-[var(--neon-orange)]">About</Link>
                </li>
                <li>
                  <Link href="/careers" className="text-[var(--text-secondary)] hover:text-[var(--neon-orange)]">Careers</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[var(--text-secondary)] hover:text-[var(--neon-orange)]">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--neon-blue)] tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/faq" className="text-[var(--text-secondary)] hover:text-[var(--neon-orange)]">FAQ</Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[var(--text-secondary)] hover:text-[var(--neon-orange)]">Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--neon-blue)] tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/privacy" className="text-[var(--text-secondary)] hover:text-[var(--neon-orange)]">Privacy</Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[var(--text-secondary)] hover:text-[var(--neon-orange)]">Terms</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-[var(--text-muted)] text-sm text-center">This website was built by a non-engineer in two days with AI.</p>
            <p className="text-[var(--text-muted)] text-sm text-center">&copy; 2023 Trilled. All rights reserved.</p>
          </div>
        </div>
    </footer>
  )
} 