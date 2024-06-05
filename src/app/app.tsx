import {
  About,
  Banner,
  Footer,
  Header,
  Speakers,
  Supports,
  GetInvolved,
} from './sections'
import {Symbols} from './parts'
import {config} from './config'
import {contributes, speakers, supports} from '../data'

config.addSection('Topo', <Banner />)
config.addSection('Comunidade', <About />)
config.addSection('Palestras confirmadas', <Speakers speakers={speakers} />)
config.addSection('Contribua', <GetInvolved contributes={contributes} />)
config.addSection('Faça acontecer', <Supports supports={supports} />)

export const App = () => {
  return (
    <>
      <Header />
      {config.elements}
      <Footer />
      <Symbols />
    </>
  )
}
