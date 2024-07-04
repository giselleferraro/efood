import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  position: relative;
  border: 0.5px solid ${cores.rosa};

  ${TagContainer} {
    margin-right: 20px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: inline;
  margin-top: 16px;
  margin-left: 8px;
  margin-bottom: 8px;
`

export const Nota = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: inline;
  margin-top: 16px;
  text-align: left;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin: 8px;
`

// export const Infos = styled.div`
//   position: absolute;
//   top: 16px;
//   right: 16px;
// `
