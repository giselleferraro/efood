import logo from '../../asset/images/logo.png'
import facebook from '../../asset/images/facebook.png'
import instagram from '../../asset/images/instagram.png'
import twitter from '../../asset/images/twitter.png'
import { Logo, Rodape, RedesSocias, Informacao } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Rodape>
    <Logo src={logo} alt="Logo do efood" />
    <RedesSocias>
      <img src={facebook} alt="" />
      <img src={instagram} alt="" />
      <img src={twitter} alt="" />
    </RedesSocias>
    <Informacao>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Informacao>
  </Rodape>
)

export default Footer
