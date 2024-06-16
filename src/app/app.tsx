import {
  About,
  Banner,
  Footer,
  Video,
  Header,
  Speakers,
  Supports,
  GetInvolved,
} from "./sections";
import { GTM, Symbols } from "./parts";
import { config } from "./config";
import { contributes, speakers, supports } from "../data";

config.addSection("Topo", <Banner />);
config.addSection("Comunidade", <About />);
config.addSection("Palestras", <Speakers speakers={speakers} />);
config.addSection("Conf", <Video src="/assets/videos/conf-2023.mp4" />);
config.addSection("Contribua", <GetInvolved contributes={contributes} />);
config.addSection("Apoie", <Supports supports={supports} />);

export const App = () => {
  return (
    <>
      <Header />
      {config.elements}
      <Footer />
      <Symbols />
      <GTM />
    </>
  );
};
