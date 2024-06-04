import {contributes, speakers, supports} from '../data'
import {
  // Testimonials,
  // Contact,
  Speakers,
  Supports,
  Banner,
  About,
  GetInvolved,
} from './sections'

export interface Sections {
  banner?: JSX.Element
  about?: JSX.Element
  speakers?: JSX.Element
  testimonials?: JSX.Element
  getInvolved?: JSX.Element
  supports?: JSX.Element
  contact?: JSX.Element
}

export const sections: Sections = {
  banner: <Banner />,
  about: <About />,
  speakers: <Speakers speakers={speakers} />,
  getInvolved: <GetInvolved contributes={contributes} />,
  // testimonials: <Testimonials />,
  supports: <Supports supports={supports} />,
  // contact: <Contact />,
}
