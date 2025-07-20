// data/team.ts
export interface TeamMember {
  name: string
  role: string
  image: string
  linkedin?: string
}

export const team: TeamMember[] = [
  {
    name: "Ed Rafferty",
    role: "President & Director of Operations",
    image: "/team/ed-rafferty.jpg",
    linkedin: "https://www.linkedin.com/in/ed-raffertybaa43a51", // Replace with actual link
  },
  {
    name: "Member 2",
    role: "Treasurer & Director of Administration",
    image: "/images/team-placeholder.jpg",
    linkedin: "https://www.linkedin.com/in/member2", // Optional
  },
  {
    name: "Team Member 3",
    role: "Operations Manager",
    image: "/images/team-placeholder.jpg",
    linkedin: "https://www.linkedin.com/in/member3",
  },
]

