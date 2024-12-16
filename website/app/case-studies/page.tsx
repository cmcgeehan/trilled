import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const caseStudies = [
  {
    id: 'landingNMT',
    title: "Doubling Sales in Eight Months",
    subtitle: "How we moved a sales team to Mexico and doubled their conversion with sales frameworks and automation",
    thumbnail: "/placeholder.svg"
  },
  {
    id: 'fortune-500-data',
    title: "Streamlining Data Analysis for Fortune 500 Company",
    subtitle: "Reducing data processing time by 60% with our hybrid approach",
    thumbnail: "/placeholder.svg"
  },
  // Add more case studies as needed
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center text-[var(--neon-blue)]">Case Studies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link href={`/case-studies/${study.id}`} key={study.id} className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={study.thumbnail}
                  alt={study.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-[var(--neon-blue)] group-hover:text-[var(--neon-orange)] transition-colors duration-300">{study.title}</h2>
                  <p className="text-[var(--text-secondary)]">{study.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

