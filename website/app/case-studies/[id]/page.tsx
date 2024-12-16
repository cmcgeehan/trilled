import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { notFound } from 'next/navigation'

type CaseStudy = {
  id: string
  title: string
  subtitle: string
  thumbnail: string
  videoUrl?: string
  audioUrl?: string
  content: string
}

const caseStudies: Record<string, CaseStudy> = {
  landingNMT: {
    id: 'landingNMT',
    title: "Doubling Sales in Eight Months",
    subtitle: "How we moved a sales team to Mexico and doubled their conversion with sales frameworks and automation",
    thumbnail: "/images/caseStudies/landingNMT.webp",
    content: `
      <p>When 2024 began, this sales team was falling short of all their growth goals. They'd cycled through experienced sales leaders and built custom software tools, and the sales reps were working harder than ever. But they still couldn't get the team to perform at a high level.</p>
      <p>So I got in the weeds. I met with every sales agent and leader on the team to understand what they were seeing. I read all their scripts and guides for the team, listened to countless calls from agents and took calls myself. After a few weeks we had a clear plan of attack. I'm going to talk through each of the opportunities we found and how we solved them so that you can take them and apply them to your own business.</p>
      
      <h2>Opportunities We Found</h2>
      <h3>Tooling and Support</h3>
      <p>The first thing we worked on was that the software the team was using. Sales reps couldn't easily see a prioritized list of what leads they needed to talk to, so callbacks and follow ups were falling through the cracks. The team couldn't leave notes in the CRM, so they had to get to know every lead's situation all over again when they called back in. They also had no place to reference all of the business's complicated product offerings if they forgot something, so they couldn't support leads in real time without keeping everything in their head.</p>
      <p>We got to work rebuilding their workflow. We prioritized all leads by whether they had reached out to us, we had gotten their info somewhere and they were new, or if we'd already reached out to them but hadn't heard back yet. This made it easy for sales reps to just pick up the phone at start calling at the top of the list without worrying they would lose a lead.</p>
      <p>Then we made a wiki for them. We wrote down the policies for everything we could think of in the business they might need to know. And we did this in a Notion wiki page, which is cool because you can tell the page to "expire" after a certain number of days. This prompts the owner of the content to go back in and make sure it's up to date. We'd had many 3, 4 year old documents floating around being referenced by reps and this let us tighten that up.</p>
      <p>So now, agents have tools that are working for them and making their lives better.</p>
      
      <h3>Coaching + Feedback</h3>
      <p>The next thing we worked on was the sales coaching done by the leaders. We really started this while product was being built, but I put it second because we needed things like the ability to leave notes, because we could reinforce leaving notes. So we couldn't totally get this right until the product pieces were in place.</p>
      <p>The sales team had no framework they used to sell. They were heavily encourage to drive sales, but weren't taught how to show someone that their product was the best. And I think to take it a step farther, they hadn't used the product because they were in a different country than where the product was available, so they didn't totally believe they were selling the best product.</p>
      <p>There was a ton of room for improvement here. The firs thing we did was take the CLOSER framework popularized by Alex Hormozi and repurpose it for our own business (and I'll link that in the blog version of this for anyone interested). We sat the whole team down, and went through the whole framework and what was expected, and it didn't really take off at first. So we went back to the drawing board, taught them again just the first step of the CLOSER framework, increased the amount of feedback agents were getting so at least one call was being reviewed every two days for every agent, and then we started to really see progress.</p>
      <p>Next, we went and built an onboarding process that walked new hires through the product, why it was built, what competitors there were and the reasons people didn't like those competitors, and how we solved those problems. Once we had it done we made every single agent go back through onboarding to make sure they understood + believed it was the best product on the market, and how to sell it effectively.</p>
      <p>This part was a ton of work. All the leaders had to step up the amount of work they were doing to make sure the agents got the help they needed. But this also had the biggest impact. When we started grading calls, agents were scoring in the teens and 20s in terms of sales performance. A few short months later they were in the 60s on average and we'd heard our first few "perfect" calls.</p>
      
      <h3>Data + Metrics</h3>
      <p>The last big area of focus was on the team's success metrics – a hot topic when we started. The marketing team was testing new things on a huge scale, so lead quality was fluctuating month to month. The agents were incentivized on their close rate and the number of bookings they made, which were both impacted by the quality of leads they got. The whole team was far short of the close rate leadership thought they could hit but nobody knew why.</p>
      <p>I started by breaking down the input metrics for the team. For sales, I asked "what are the things a sales agent could do to be sure a lead has the highest possible chance to close?" And we narrowed it down to:</p>
      <ul>
        <li>Respond quickly – if I have to wait a long time, I might book with a competitor or forget about you altogether</li>
        <li>Respond effectively – This meant grading calls to ensure we were doing a good job of selling our product</li>
        <li>Respond with context – This meant leaving notes in our CRM. If a lead has talked to us five times, the absolute last thing they want to do is explain thee situation from the beginning. So we had the team keep meticulous notes on their leads so anyone could answer when they called back in and pick up the conversation where it left off.</li>
        <li>Follow up often – Life is busy, and people aren't always sitting by the phone waiting for someone to call and get them into a new place to live. The more attempts we make, the more likely it is the lead eventually answers.</li>
      </ul>
      <p>Those were the four things we decided to measure our team against in addition to bookings. We had weekly bonuses and a quarterly bid for what hours reps were on shift for and we aligned both to these metrics. We also made everyone check out with a team lead and review these metrics every day. There was no more complaining that success was in someone else's hands or worrying that agents were off track.</p>
      
      <h2>Summary</h2>
      <p>Those were the big three opportunities we tackled with the team. This led to the team doubling their conversion rates across all lead sources, which was a huge efficiency gain for the business.</p>
    `
  }
}

export default function CaseStudy({ params }: { params: { id: string } }) {
  const study = caseStudies[params.id as keyof typeof caseStudies]

  if (!study) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-4 text-[var(--neon-blue)]">{study.title}</h1>
        <p className="text-xl mb-8 text-[var(--text-secondary)]">{study.subtitle}</p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--neon-orange)]">
            {study.videoUrl ? 'Watch the Case Study' : 'Case Study Overview'}
          </h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src={study.thumbnail}
              alt={study.videoUrl ? "Video thumbnail" : study.title}
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
            {study.videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/90 text-gray-900 font-medium">
                  Play Video
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {study.audioUrl && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--neon-orange)]">Listen to the Case Study</h2>
            <audio controls className="w-full">
              <source src={study.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--neon-orange)]">Read the Case Study</h2>
          <div className="prose prose-lg prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: study.content }} />
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--neon-blue)]">Ready to Transform Your Business?</h2>
          <p className="text-[var(--text-secondary)] mb-6">Let us help you achieve similar results with our hybrid team approach.</p>
          <Button size="lg" className="bg-[var(--neon-orange)] hover:bg-[var(--neon-orange)]/90 text-gray-900 font-medium">
            Get Started Today
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

