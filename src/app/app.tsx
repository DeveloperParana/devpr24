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
import { config } from "./config";
import { companies, contributes, speakers, supports } from "../data";
import { Video } from "./components";

config.addSection("Comunidade", <About />);
config.addSection("Palestras", <Speakers speakers={speakers} />);
config.addSection("Conf 2023", <Conf2023 src="/assets/videos/conf-2023.mp4" />);
config.addSection("Contribua", <GetInvolved contributes={contributes} />);
config.addSection("Apoie", <Supports supports={supports} />);
config.addSection("FAQ", <FAQ />);
config.addSection("Marcas", <Companies list={companies} />);

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
      {config.elements}
      <Footer />
      <Symbols />
      <GTM />
    </>
  );
};
