export interface ApoiaSeResult {
  _id: string;
  goals: any[];
  rewards: any[];
  social: any[];
  type: number;
  username: string;
  name: string;
  address: Address[];
  campaigns: Campaign[];
}

export interface Address {
  state: string;
  city: string;
}

export interface Campaign {
  _id: string;
  about: About;
  categories: string[];
  createdDate: Date;
  chargeMode: string;
  campaignWithSocialImpact: boolean;
  contentCount: number;
  fundingModel: string;
  fundingFrequency: string;
  hideLocation: boolean;
  goals: Goal[];
  launchDate: Date;
  name: string;
  publishedDate: Date;
  dueDate: Date;
  rewards: Reward[];
  users: User[];
  status: string;
  social: Social[];
  supports: Supports;
  otherSupports: OtherSupports;
  slug: string;
  settings: Settings;
  welcomeMessage: null;
  welcomeVideo: null;
  explicit: boolean;
  paywallAccessControl: boolean;
  retroactiveAccessControl: boolean;
  trackers: OtherSupports;
  linkedCampaigns: LinkedCampaign[];
  currentTime: Date;
}

export interface About {
  video: string;
  desc: string;
  what: string;
  photo: string;
  cover: string;
  slogan: string;
}

export interface Goal {
  _id: string;
  title: string;
  desc: string;
  value: number;
}

export interface LinkedCampaign {
  _id: string;
  campaignId: string;
  campaignStatus: string;
  campaignSlug: string;
  turboCheckoutMessage: string;
  name: string;
  photo: string;
}

export interface OtherSupports {}

export interface Reward {
  sold: Sold[];
  _id: string;
  title: string;
  desc: string;
  value: number;
  physicalDelivery?: boolean;
  limitedNumber?: number;
  recommended: boolean;
}

export interface Sold {
  supportId: string;
  status: Status;
}

export enum Status {
  Confirmed = "confirmed",
  Reserved = "reserved",
}

export interface Settings {
  admin: Admin;
}

export interface Admin {
  flags: any[];
}

export interface Social {
  _id: string;
  type: string;
  url: string;
}

export interface Supports {
  total: Total;
  count: number;
}

export interface Total {
  value: number;
  count: number;
}

export interface User {
  _id: string;
  access: string;
}
