import type {Contribute} from '../../data'
import {GoogleFormDialog} from '../components'

interface GetInvolvedAttrs {
  contributes: Contribute[]
}

export const GetInvolved = ({contributes}: GetInvolvedAttrs) => {
  const openGoogleFormDialog = (src: string) => {
    document.body.append(<GoogleFormDialog src={src} />)
  }

  return (
    <section className="get-involved" id="getInvolved">
      <div className="title">
        <h2 className="titleText">Contribua</h2>
      </div>
      <div className="content">
        {contributes.map((contribute) => {
          return (
            <div className="box">
              <div className="text">
                <h3>{contribute.title}</h3>
                <em className="text-error">
                  Aberto até {contribute.date?.toLocaleDateString()}
                </em>
                <p>{contribute.description}</p>

                <button
                  className="btn"
                  onClick={() => openGoogleFormDialog(contribute.action.href)}
                >
                  {contribute.action.text}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
