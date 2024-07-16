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
} from "./sections";
import { GTM, Symbols } from "./parts";

export const App = () => {
  return (
    <>
      <Header />
      <Conf2024 src="/assets/videos/conf-2024.mp4" />
      <Banner />
      <About />
      <Speakers />
      <Agenda />
      <Supports />
      <Supporters />
      <Companies />
      <Conf2023 src="/assets/videos/conf-2023.mp4" />
      <FAQ />
      <Footer />
      <Symbols />
      <GTM />
    </>
  );
};
