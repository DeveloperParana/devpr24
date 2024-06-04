import {sections} from './app.sections'
import {Footer, Header} from './sections'
import {Symbols} from './parts'

export const App = () => {
  return (
    <>
      <Header />
      {Object.values(sections)}
      <Footer />
      <Symbols />
    </>
  )
}
