export type Section = {
  id: string
  name: string
}

type Location = {
  city: string
  country: string
}

type Profile = {
  network: string
  username: string
  url: string
  icon: string
}

export type Basics = {
  name: string
  title: string
  picture: string
  email: string
  phone: string
  summary: string
  location: Location
  profiles: Profile[]
}

export type Language = {
  name: string
  fluency: string
}

export type Project = {
  title: string
  summary: string
  keywords: string[]
  website?: string
  github: string
}

export type Education = {
  institution: string
  website: string
  area: string
  studyType: string
  startDate: string
  endDate?: string
}

export type Experience = {
  company: string
  position: string
  website: string
  startDate: string
  endDate?: string
  highlights: string[]
}
