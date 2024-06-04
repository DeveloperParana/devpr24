import {DialogContainer} from './dialog-container'
import {Icon} from '../parts'
import {find, px} from '../utils'

interface GoogleFormDialogAttrs {
  src: string
}

export const GoogleFormDialog = ({ src }: GoogleFormDialogAttrs) => {
  const width = innerWidth - 128
  const height = innerHeight - 128

  const onOpen = (dialog: DialogContainer) => {
    console.log(dialog)
  }

  return (
    <DialogContainer opened={true} onOpen={onOpen}>
      <button
        slot="close"
        className="btn rounded small top-right"
        onclick={() => find('devpr-dialog-container').close()}
      >
        <Icon name="close" width={48} />
      </button>
      <iframe
        slot="content"
        src={src}
        width={px(width)}
        height={px(height)}
        frameborder={0}
        marginheight={0}
        marginwidth={0}
      >
        Carregando...
      </iframe>
    </DialogContainer>
  )
}
