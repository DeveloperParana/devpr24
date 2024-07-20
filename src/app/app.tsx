import {
  FAQ,
  About,
  Banner,
  Footer,
  Header,
  Speakers,
  Supports,
  Conf2023,
  Conf2024,
  Companies,
  Supporters,
  Agenda,
  Team,
} from "./sections";
import { GTM, Symbols } from "./parts";
import { findAll, queue } from "./utils";

export const App = () => {

  queue(() => {
    for (const el of findAll('[data-animate]')) {
      el.style.animation = `scroll-x ${el.dataset.animate} linear infinite`
    }
  })

  return (
    <>
      <Header />
      <Conf2024 src="/assets/videos/conf-2024.mp4" />
      <Banner />
      <About />
      <Agenda />
      <Speakers />
      <Supports />
      <Supporters />
      <Companies />
      <Team />
      <Conf2023 src="/assets/videos/conf-2023.mp4" />
      <FAQ />
      <Footer />
      <Symbols />
      <GTM />
    </>
  );
};
