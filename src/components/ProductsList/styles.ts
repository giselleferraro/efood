// import styled from 'styled-components'
// import { Props } from '.'

// export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
//   padding: 32px 0;
// `

// export const List = styled.ul`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   column-gap: 80px;
//   row-gap: 48px;
// `

// export const Title = styled.h2`
//   font-weight: bold;
//   font-size: 18px;
//   left: 8px;
// `


import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1024px;
  margin: 80px auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
`
