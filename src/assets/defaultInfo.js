import flower from "./flower.svg"

export const defaultInfo = {
  currentTheme: "light-theme",
  mainInfo: {
    personName: "John Doe",
    speciality: "Full Stack Developer"
  },
  contacts: {
    image: flower,
    github: "github.com/username",
    site: "username.com",
    mail: "username@email.com",
    number: "+0 000 000 0000"
  },
  experience: [
    {
      id: crypto.randomUUID(),
      date: "2016.09" + " - " + "Present",
      companyName: "Company Name",
      description: "Experience designing Android and iOS apps. An understanding of layout, typography and visual hierarchy. An understanding balance the needs of editorial, the business, and the user. Experience designing for responsive web platforms."
    },
    {
      id: crypto.randomUUID(),
      date: "2014.11" + " - " + "2016.05",
      companyName: "Company Name",
      description: "Experience designing Android and iOS apps. An understanding of layout, typography and visual hierarchy. An understanding balance the needs of editorial, the business, and the user. Experience designing for responsive web platforms."
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      date: "2014" + " - " + "2019",
      eduName: "Idaho State University",
      description: "Business Informatics"
    },
  ],
  skills: [
    {
      id: crypto.randomUUID(),
      skillName: "React",
      level: 1
    },
    {
      id: crypto.randomUUID(),
      skillName: "HTML",
      level: 4
    },
    {
      id: crypto.randomUUID(),
      skillName: "JavaScript",
      level: 4
    },
    {
      id: crypto.randomUUID(),
      skillName: "TypeScript",
      level: 3
    },
    {
      id: crypto.randomUUID(),
      skillName: "Python",
      level: 4
    }
  ],
  languages: [
    {
      id: crypto.randomUUID(),
      langName: "English",
      level: "Native"
    },
    {
      id: crypto.randomUUID(),
      langName: "Italian",
      level: "C1",
    },
    {
      id: crypto.randomUUID(),
      langName: "Spanish",
      level: "B2"
    },
    {
      id: crypto.randomUUID(),
      langName: "Chinese",
      level: "A2"
    }
  ]
}