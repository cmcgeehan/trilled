'use client'

import Image from 'next/image'

export default function ComparisonSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <h2 className="text-3xl font-bold mb-12 text-center text-[var(--neon-blue)]">Why Choose Hybrid Teams?</h2>
      
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Why Not Fully Human Teams */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <Image
              src="/images/fullyHumanTeams.webp"
              alt="Fully Human Teams"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--neon-orange)]">Why Not Fully Human Teams?</h3>
            <div className="space-y-4 text-[var(--text-secondary)]">
              <p>Every manager has thought to themselves, &apos;I wish I had ten of my best employee. They get so much done!&apos;</p>
              <p>Human agents can only call one person, or perform one task, at a time. An AI can call many people at once, so you can get more out of them in a day than any human.</p>
            </div>
          </div>
        </div>

        {/* Why Not Fully AI Teams */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
            <Image
              src="/images/fullyAITeams.webp"
              alt="Fully AI Teams"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--neon-orange)]">Why Not Fully AI Teams?</h3>
            <div className="space-y-4 text-[var(--text-secondary)]">
              <p>AI is incredibly efficient, but it takes time and effort to train. Nothing beats human learnings, which we take an incorporate for both human and AI agents.</p>
              <p>When a task is new, we don&apos;t have enough data to train an agent and we learn and change processes quickly. We stabilize the team with humans while building the foundation to train our AI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

