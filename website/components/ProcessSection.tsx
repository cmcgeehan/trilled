import { Users, BotIcon, Lightbulb, Zap, ArrowDown } from 'lucide-react'

const processSteps = [
  {
    icon: Users,
    title: "Hire Operators",
    description: "We start by assembling a small team of skilled human operators."
  },
  {
    icon: BotIcon,
    title: "Introduce AI",
    description: "We integrate an AI agent and train it to work alongside the human team."
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "The AI agent learns and improves, enhancing team efficiency."
  },
  {
    icon: Zap,
    title: "Scale AI Integration",
    description: "We add more AI agents to further boost productivity and capabilities."
  }
]

export default function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-grey-300">
      <h2 className="text-3xl font-bold mb-12 text-center text-[var(--neon-blue)]">Our Process</h2>
      <div className="max-w-4xl mx-auto">
        {processSteps.map((step, index) => (
          <div key={index}>
            <div className="flex items-start bg-gray-800/50 p-6 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                <step.icon className="w-6 h-6 text-[var(--neon-orange)]" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-[var(--neon-blue)]">{step.title}</h3>
                <p className="text-[var(--text-secondary)]">{step.description}</p>
              </div>
            </div>
            {index < processSteps.length - 1 && (
              <div className="flex justify-center my-4">
                <ArrowDown className="w-6 h-6 text-[var(--neon-orange)]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

