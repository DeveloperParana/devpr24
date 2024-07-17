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
  | "lays"
  | "devsoutinho"
  | "gustavo"
  | "munif";

export interface SocialLink {
  kind: SocialKind;
  href: string;
  action?(): void;
}

type PresentationType = "talk" | "workshop";

export interface Presentation {
  title: string;
  type: PresentationType;
  start: Date;
  end: Date;
  place: string;
  status: boolean;
}

export interface Speaker<T extends SpeakerNickname = SpeakerNickname> {
  name: string;
  nickname: T;
  photo: string;
  tags: string[];
  links: SocialLink[];
  bio: string[];
  presentation: Presentation;
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
  date: Date;
  action: {
    href: string;
    text: string;
  };
}

type ScheduleSlotType = "break" | "talk" | "workshop";

export interface ScheduleSlot {
  title: string;
  type: ScheduleSlotType;
  start: Date;
  end: Date;
  place: string;
  speaker?: SpeakerNickname;
}
