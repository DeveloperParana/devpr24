import type {SocialLink} from '../../data'
import {Icon} from './icon'
import {Link} from './link'

export interface SocialLinksAttrs {
  links: SocialLink[]
}

export const SocialLinks = ({links}: SocialLinksAttrs) => {
  return (
    <ul className="social-links">
      {links.map((link) => {
        return (
          <Link href={link.href} target="_blank">
            <Icon name={link.kind} />
            <span>{link.kind}</span>
          </Link>
        )
      })}
    </ul>
  )
}
