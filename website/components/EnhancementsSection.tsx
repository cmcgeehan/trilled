'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Zap, Shield, BarChart } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: "AI Knowledge Bases",
    description: "Our teams leverage AI to get the right answers faster and reduce human error."
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Custom automation tools streamline processes and increase overall team efficiency."
  },
  {
    icon: Shield,
    title: "AI-Powered Quality Assurance",
    description: "AI systems monitor and ensure consistent high-quality outputs across all team activities."
  },
  {
    icon: BarChart,
    title: "Data-Driven Optimization",
    description: "Continuous analysis of team performance data to identify and implement improvements."
  }
]

export default function EnhancementCard() {

  return (
    <div className="container mx-auto px-4 md:px-6 mt-8 rounded-xl">
      <h2 className="text-3xl font-bold mb-12 text-center text-[var(--neon-blue)]">Tools That Power Our Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-gray-800/50 border-gray-700 shadow-lg hover:bg-gray-800 transition-colors rounded-xl">
            <CardContent className="p-6">
              <feature.icon className="w-12 h-12 text-[var(--neon-orange)] mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

