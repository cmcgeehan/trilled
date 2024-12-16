'use client'

import Image from 'next/image'
import { useState } from 'react'

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

interface TeamMemberCardProps {
  member: TeamMember
  priority?: boolean
}

export function TeamMemberCard({ member, priority }: TeamMemberCardProps) {
  const [imgSrc, setImgSrc] = useState(member.image)

  return (
    <div className="bg-gray-800 p-8 rounded-lg w-full max-w-2xl mx-auto">
      <Image 
        src={imgSrc} 
        alt={member.name} 
        width={600} 
        height={600} 
        className="rounded-full mx-auto mb-6 w-80 h-80 object-contain"
        priority={priority}
        onError={() => {
          setImgSrc('/images/placeholder.jpg')
        }}
      />
      <h2 className="text-2xl font-semibold mb-2 text-center">{member.name}</h2>
      <p className="text-blue-400 mb-4 text-center">{member.role}</p>
      <p className="text-center text-gray-300">{member.bio}</p>
    </div>
  )
} 