import { TeamMemberCard } from './TeamMemberCard'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const teamMembers = [
  {
    name: "Conor McGeehan",
    role: "Co-Founder",
    bio: "Conor is a seasoned entrepreneur with a passion for AI and automation. In his last company, he used automation and nearshore teams to double the sales team's conversion rate. Prior to that, he brought an operations team from 75 people down to 5 using automation tools. He created over $20m in annual profits for the business.",
    image: "/images/conor.jpg?v=" + Date.now()
  },
  {
    name: "Gabriela Martha",
    role: "Co-Founder",
    bio: "Gaby spent the last three years building teams in Mexico City. She has hired hundreds of people for U.S. based businesses and saved them over $10m in operational costs.",
    image: "/images/gaby.jpg?v=" + Date.now()
  },
  // Add more team members here
]

export default function Team() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Team</h1>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {teamMembers.length <= 2 ? (
              <div className="md:col-span-2 w-full max-w-screen-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {teamMembers.map((member, index) => (
                    <TeamMemberCard 
                      key={index}
                      member={member}
                      priority={index === 0}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <>
                {teamMembers.map((member, index) => (
                  <TeamMemberCard 
                    key={index}
                    member={member}
                    priority={index === 0}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

