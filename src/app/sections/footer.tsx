import {socialLinks} from '../../data'
import {Codaqui, DevParana, Link, SocialLinks} from '../parts'

export const Footer = () => {
  return (
    <footer id="footer" className="copyleftText">
      <SocialLinks links={socialLinks} />

      <p>2015 ~ 2024 &copy;</p>
      <p className="flex gap-16 text-red">
        <DevParana width={120} />
        <Codaqui width={100} />
      </p>
      <p>CNPJ 44.593.429/0001-05</p>
      <p>Feito com por 🥰 <Link href='https://github.com/guiseek' target='_blank'>@guiseek</Link> </p>
    </footer>
  )
}
