export type SpeakerLinkKind = 'github' | 'linkedIn' | 'youtube'

export type SpeakerNickname = 'deyvin' | 'ananeridev' | 'pachicodes' | 'jonatas'

export interface SpeakerLink {
  kind: SpeakerLinkKind
  href: string
}

export interface Speaker<T extends SpeakerNickname = SpeakerNickname> {
  name: string
  nickname: T
  photo: string
  tags: string[]
  links: SpeakerLink[]
  bio: string[]
}

export interface Supporter {
  title: string
  amount: string
  limit: number
  description: string
  benefits: string[]
  link: {
    href: string
    text: string
  }
}

export interface Contribute {
  title: string
  description: string
  date?: Date
  action: {
    href: string
    text: string
  }
}

