export type SocialKind =
  | "github"
  | "linkedIn"
  | "youtube"
  | "instagram"
  | "whatsapp"
  | "snake"
  | "cs-go";

export type SpeakerNickname =
  | "deyvin"
  | "ananeridev"
  | "jonatas"
  | "kipper"

export interface SocialLink {
  kind: SocialKind;
  href: string;
  action?(): void
}

export interface Speaker<T extends SpeakerNickname = SpeakerNickname> {
  name: string;
  nickname: T;
  photo: string;
  tags: string[];
  links: SocialLink[];
  bio: string[];
}

export interface Supporter {
  title: string;
  amount: string;
  limit: number;
  description: string;
  benefits: string[];
  link: {
    href: string;
    text: string;
  };
}

export interface Contribute {
  title: string;
  description: string;
  date?: Date;
  action: {
    href: string;
    text: string;
  };
}
