import {Codaqui, DevParana} from '../parts'

export const Footer = () => {
  return (
    <footer id="footer" className="copyleftText">
      <p>2015 ~ 2024 &copy;</p>
      <p className="flex gap-16 text-red">
        <DevParana width={120} />
        <Codaqui width={100} />
      </p>
      <p>CNPJ 44.593.429/0001-05</p>
    </footer>
  )
}
