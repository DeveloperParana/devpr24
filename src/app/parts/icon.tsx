import type {Size} from '../../types'

type IconName =
  | 'sun'
  | 'moon'
  | 'github'
  | 'youtube'
  | 'instagram'
  | 'linkedIn'
  | 'maximize'
  | 'plus'
  | 'close'
  | 'check'
  | 'asterisk'
  | 'contrast'
  | 'heart'

interface IconAttrs extends Size {
  name: IconName
}

export const Icon = ({name, width = 24, height = width}: IconAttrs) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={'#' + name} />
    </svg>
  )
}
