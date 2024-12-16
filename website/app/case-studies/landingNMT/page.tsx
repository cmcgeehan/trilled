import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const caseStudies = {
  'ecommerce-giant': {
    title: "AI-Enhanced Customer Service for E-commerce Giant",
    subtitle: "How we improved customer satisfaction by 40% using hybrid teams",
    videoUrl: "https://example.com/video1",
    audioUrl: "https://example.com/audio1",
    content: `
      <p>In this case study, we explore how our hybrid team approach revolutionized customer service for a leading e-commerce platform. By combining AI-powered chatbots with human expertise, we were able to significantly improve response times and customer satisfaction rates.</p>
      
      <h2>The Challenge</h2>
      <p>Our client, a major e-commerce player, was struggling with managing high volumes of customer inquiries, especially during peak shopping seasons. They needed a solution that could handle the increasing demand without compromising on the quality of customer service.</p>
      
      <h2>Our Approach</h2>
      <p>We implemented a two-tier system:</p>
      <ul>
        <li>AI-powered chatbots to handle routine inquiries and provide instant responses 24/7</li>
        <li>A team of human experts to manage complex issues and provide personalized support</li>
      </ul>
      
      <h2>The Results</h2>
      <p>After implementing our hybrid team solution:</p>
      <ul>
        <li>Customer satisfaction rates increased by 40%</li>
        <li>Response times decreased by 60%</li>
        <li>The platform was able to handle 3x more inquiries without increasing staff</li>
      </ul>
      
      <p>This case study demonstrates the power of combining AI efficiency with human expertise to deliver exceptional customer service at scale.</p>
    `
  },
  'fortune-500-data': {
    title: "Streamlining Data Analysis for Fortune 500 Company",
    subtitle: "Reducing data processing time by 60% with our hybrid approach",
    videoUrl: "https://example.com/video2",
    audioUrl: "https://example.com/audio2",
    content: `
      <p>This case study showcases how our hybrid team approach transformed data analysis processes for a Fortune 500 company, leading to faster insights and better decision-making.</p>
      
      <h2>The Challenge</h2>
      <p>Our client was drowning in data. With information pouring in from multiple sources, their traditional analysis methods were struggling to keep up, causing delays in critical business decisions.</p>
      
      <h2>Our Approach</h2>
      <p>We implemented a hybrid solution that leveraged:</p>
      <ul>
        <li>AI-powered data processing to handle large volumes of data and identify patterns</li>
        <li>Human analysts to interpret results, provide context, and make strategic recommendations</li>
      </ul>
      
      <h2>The Results</h2>
      <p>Our hybrid approach delivered impressive results:</p>
      <ul>
        <li>Data processing time reduced by 60%</li>
        <li>Accuracy of insights improved by 35%</li>
        <li>Decision-making speed increased by 50%</li>
      </ul>
      
      <p>This case study illustrates how combining AI capabilities with human expertise can dramatically improve data analysis processes, leading to faster and more informed business decisions.</p>
    `
  },
  // Add more case studies as needed
}

export default function CaseStudy({ params }: { params: { id: string } }) {
  const study = caseStudies[params.id as keyof typeof caseStudies]

  if (!study) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-4 text-[var(--neon-blue)]">{study.title}</h1>
        <p className="text-xl mb-8 text-[var(--text-secondary)]">{study.subtitle}</p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--neon-orange)]">Watch the Case Study</h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Video thumbnail"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="bg-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/90 text-gray-900 font-medium">
                Play Video
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--neon-orange)]">Listen to the Case Study</h2>
          <audio controls className="w-full">
            <source src={study.audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--neon-orange)]">Read the Case Study</h2>
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: study.content }} />
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--neon-blue)]">Ready to Transform Your Business?</h2>
          <p className="text-[var(--text-secondary)] mb-6">Let us help you achieve similar results with our hybrid team approach.</p>
          <Button size="lg" className="bg-[var(--neon-orange)] hover:bg-[var(--neon-orange)]/90 text-gray-900 font-medium">
            Get Started Today
          </Button>
        </div>
      </main>
    </div>
  )
}

