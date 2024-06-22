import {DescriptionDialog} from '../components'
import type {Speaker, SocialLink} from '../../data/typings'
import {Icon, Link} from '../parts'

export interface SpeakersAttrs {
  speakers: Speaker[]
}

export const Speakers = ({speakers}: SpeakersAttrs) => {
  const openSpeaker = (speaker: Speaker) => {
    const description = {
      title: speaker.name,
      content: speaker.bio,
      items: speaker.tags,
      className: 'speaker-info',
      onClose(dialog: HTMLDialogElement, ev: Event) {
        console.log(dialog, ev)
      },
    }
    document.body.append(<DescriptionDialog {...description} />)
  }

  const getLinkLabel = (speaker: Speaker, link: SocialLink) => {
    return `${link.kind} de ${speaker.name}`
  }

  return (
    <section className="speakers" id="speakers">
      <div className="title">
        <h2 className="titleText">
          Palestrantes <span>confirmados</span>
        </h2>
      </div>
      <div className="content">
        {speakers.map((speaker) => {
          return (
            <div className="box">
              <div className="imgBx">
                <img src={speaker.photo} alt={speaker.name} />
              </div>
              <div className="text">
                <h2>{speaker.name}</h2>
                {/* <div className="flex row align-center">
                  <em>@{speaker.nickname}</em>
                </div> */}

                <footer className="flex space-between align-center">
                  <div className="flex gap-16">
                    {speaker.links.map((link) => {
                      return (
                        <Link
                          href={link.href}
                          target="_blank"
                          className="social-link"
                          ariaLabel={getLinkLabel(speaker, link)}
                        >
                          <Icon name={link.kind} />
                        </Link>
                      )
                    })}
                  </div>
                  <button
                    ariaLabel={`Ver mais sobre ` + speaker.name}
                    className="btn rounded"
                    onclick={() => openSpeaker(speaker)}
                  >
                    <Icon name="plus" width={32} />
                  </button>
                </footer>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
