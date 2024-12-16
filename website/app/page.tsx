import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import ProcessSection from '@/components/ProcessSection'
import ComparisonSection from '@/components/ComparisonSection'
import IndustriesSection from '@/components/IndustriesSection'
import EnhancementsSection from '@/components/EnhancementsSection'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ToolsGallery from '@/components/toolsSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-48">
          <h1 className="text-6xl font-bold tracking-tight">
            <span className="text-[var(--text-primary)]">Hybrid AI + Human teams powered by</span>
            <br />
            <span className="text-[var(--neon-blue)]">artificial intelligence.</span>
          </h1>
          <p className="mt-6 text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Revolutionizing workforce efficiency with the perfect blend of human expertise and AI capabilities.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" className="bg-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/90 text-gray-900 font-medium">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-[var(--text-muted)] text-[var(--text-secondary)] hover:bg-gray-800 hover:text-[var(--text-primary)]">
              Learn more
            </Button>
          </div>
        </section>

        <ComparisonSection />
        <ProcessSection />
        <IndustriesSection />
        <EnhancementsSection />
        <ToolsGallery />
      </main>

      <Footer />
    </div>
  )
}

