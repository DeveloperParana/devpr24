import {Dialog, type DialogAttrs} from './dialog'
import {find} from '../utils'

export interface DialogContainerAttrs extends DialogAttrs {
  onOpen?(dialog: Pick<DialogContainer, 'close'>): void
}

export class DialogContainer extends HTMLElement {
  protected shadow

  constructor(attrs: DialogContainerAttrs = {}) {
    super()
    this.shadow = this.attachShadow({mode: 'open'})
    this.shadow.append(<Dialog {...attrs} />)
    if (attrs.onOpen) attrs.onOpen(this)
    document.body.classList.add('fixed')
  }

  connectedCallback() {
    this.startAnimation('normal')
  }

  close() {
    const animation = this.startAnimation('reverse')
    document.body.classList.remove('fixed')
    animation.onfinish = () => {
      find('dialog', this.shadow).close()
      this.remove()
    }
  }

  protected startAnimation(direction: PlaybackDirection) {
    return this.animate(
      [
        {transform: 'scale(0)', opacity: 0},
        {transform: 'scale(1)', opacity: 1},
      ],
      {
        id: 'open',
        duration: 250,
        easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        fill: 'both',
        direction,
      }
    )
  }
}
customElements.define('devpr-dialog-container', DialogContainer)

declare global {
  interface HTMLElementTagNameMap {
    'devpr-dialog-container': DialogContainer
  }
}
