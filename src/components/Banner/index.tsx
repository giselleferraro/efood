import { BannerContainer, TituloPrincipal, Logo } from './styles'
import logo from '../../asset/images/logo.png'



// import Tag from '../Tag'
// import Button from '../Button'

// const Banner = () => (
//   <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
//     <div className="container">
//       {/* <Tag size="big">Destaque do dia</Tag> */}
//       <div>
//         <Logo style={{ backgroundImage: `url(${logo})` }} />
//         <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
//         {/* <Precos>
//           De <span>R$ 250,00</span> <br />
//           por apenas R$ 99,90
//         </Precos> */}
//       </div>
//       {/* <Button
//         type="link"
//         to="/produto"
//         title="Clique aqui para aproveitar a oferta"
//       >
//         Aproveitar
//       </Button> */}
//     </div>
//   </Imagem>
// )

// export default Banner

const Banner = () => (
  <BannerContainer>
    <Logo src={logo} alt="Logo do efood" />
    <TituloPrincipal>Viva experiências gastronômicas no conforto da sua casa</TituloPrincipal>
  </BannerContainer>
)
export default Banner
