import styled from 'styled-components'
import bannerImg from '../../asset/images/fundo.png'


// import { TagContainer } from '../Tag/styles'

// export const Imagem = styled.div`
//   widht: 100%;
//   height: 384px;
//   display: block;
//   background-repeat: no-repeat;
//   background-size: cove;
//   font-weight: bold;

//   .container {
//     padding-top: 340px;
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-end;
//   }

//   ${TagContainer} {
//     position: absolute;
//     top: 32px;
//   }
// `
// export const Titulo = styled.h2`
//   font-size: 36px;
//   max-width: 450px;
// `
// export const Logo = styled.img``


export const BannerContainer = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${bannerImg});
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
`
export const TituloPrincipal = styled.h4`
  font-weight: bold;
  font-size: 36px;
  max-width: 539px;
  text-align: center;
  margin-bottom: 40px;
`
