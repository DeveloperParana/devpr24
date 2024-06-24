import {
  FAQ,
  About,
  Banner,
  Footer,
  Header,
  Speakers,
  Supports,
  Conf2023,
  GetInvolved,
  Companies,
} from "./sections";
import { GTM, Symbols } from "./parts";
import { Video } from "./components";

export const App = () => {
  return (
    <>
      <Header />
      <Video
        volume={0.1}
        src="/assets/videos/conf-2024.mp4"
        poster="/assets/images/conf-2024-poster.webp"
      />
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
