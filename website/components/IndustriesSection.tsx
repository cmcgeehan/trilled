'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Banknote, Headphones, LaptopMinimal, Cog } from 'lucide-react'

const teamTypes = [
  {
    name: "Customer Support",
    description: "We build AI knowledge bases to make support faster, then teach AI agents to use them.",
    icon: Headphones
  },
  {
    name: "Sales",
    description: "Our sales agents learn how to most effectively sell your product, then teach AI agents to do the same faster.",
    icon: Banknote
  },
  {
    name: "Operations",
    description: "Small nearshore teams learn your processes and find ways to automate them, then we leverage AI agents to scale your operations.",
    icon: Cog
  },
  {
    name: "Software Development",
    description: "Our non-engineers use AI and automation tools to build low-code technical solutions quickly.",
    icon: LaptopMinimal
  }
]

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(teamTypes[0].name)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <h2 className="text-3xl font-bold mb-12 text-center text-[var(--neon-blue)]">Teams We Empower</h2>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center mb-8">
          {teamTypes.map((team) => (
            <button
              key={team.name}
              onClick={() => setActiveTab(team.name)}
              className={`px-4 py-2 m-2 text-lg font-medium rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeTab === team.name
                  ? 'bg-[var(--neon-orange)] text-gray-900'
                  : 'bg-gray-700 text-[var(--text-secondary)] hover:bg-gray-600'
              }`}
            >
              <team.icon size={20} /> {team.name}
            </button>
          ))}
        </div>
        <div className="relative h-64 bg-gray-700 rounded-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            {teamTypes.map((team) => (
              activeTab === team.name && (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-6 flex flex-col justify-center"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-[var(--neon-blue)]">{team.name}</h3>
                  <p className="text-[var(--text-secondary)]">{team.description}</p>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

