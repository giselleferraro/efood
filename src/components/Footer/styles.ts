import styled from 'styled-components'
import { cores } from '../../styles'

export const Rodape = styled.footer`
  background-color: ${cores.rosaClaroRodape};
  text-align: center;
  height: 298px;
`
export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
`

export const RedesSocias = styled.div`
  margin-top: 32.5px;
  img {
    margin-right: 8px;
  }
`
export const Informacao = styled.p`
  margin: 80px auto;
  max-width: 480px;
  width: 100%;
  font-size: 10px;
  font-weight: regular;
`
