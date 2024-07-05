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
  GetInvolved,
  Companies,
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
      <Conf2023 src="/assets/videos/conf-2023.mp4" />
      <GetInvolved />
      <Supports />
      <FAQ />
      <Companies />
      <Footer />
      <Symbols />
      <GTM />
    </>
  );
};
