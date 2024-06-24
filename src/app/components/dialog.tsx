import type {SizeType} from '../../types'
import {vh, vw} from '../utils'

export interface DialogAttrs {
  opened?: boolean
  width?: SizeType
  height?: SizeType
  maxWidth?: SizeType
  maxHeight?: SizeType
  className?: string
  onClose?(dialog: HTMLDialogElement, ev: Event): void
}

export const Dialog = (attrs: DialogAttrs) => {
  const {opened = true, className, maxWidth, maxHeight} = attrs

  const style = {
    maxWidth: maxWidth ?? vw(100),
    maxHeight: maxHeight ?? vh(100),
    overflow: 'visible'
  }

  function onClose(this: HTMLDialogElement, ev: Event) {
    if (attrs.onClose) attrs.onClose(this, ev)
  }

  return (
    <dialog open={opened} style={style} onClose={onClose} className={className}>
      <link href="dialog.css" rel="stylesheet" />
      <slot name="close" />
      <header>
        <slot name="header" />
      </header>
      <section style={{maxHeight: '100%', overflowX: 'auto'}}>
        <slot name="content" />
      </section>
    </dialog>
  )
}
