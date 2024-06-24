import {Countdown, Icon, Link} from '../parts'

export const Banner = () => {
  const date = new Date(2024, 6, 28, 8, 0, 0)

  return (
    <section className="banner" id="banner">
      <div className="content">
        <h2>
          Dia <span className="primary-container">28</span> de{' '}
          <span className="primary-container">Julho</span> no teatro{' '}
          <span className="primary-container"> Calil Haddad </span> em Maringá
        </h2>

        <h3>
          Organizada por{' '}
          <span className="primary-container">pessoas da comunidade</span> para
          comunidade
        </h3>

        <Countdown date={date} />

        <div className='flex row gap-16 justify-center'>
          <Link href="#apoie" className="btn">
            Apoie este evento
          </Link>

          <Link href="/whatsapp" target="_blank" className="btn flex gap-8">
            <Icon name='whatsapp'/>Participe da comunidade
          </Link>
        </div>
      </div>
    </section>
  )
}
