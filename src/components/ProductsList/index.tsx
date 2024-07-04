import Comida from '../../models/Comida'
import Product from '../Products'
import Button from '../Button'
import { Container, List } from './styles'

export type Props = {
  // title: string
  games: Comida[]
}

const ProductList = ({ games }: Props) => (
  <Container>
    <div className="container">
      {/* <h2>{games.title}</h2> */}
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            description={game.description}
            image={game.image}
            star={game.star}
            nacionalidade={game.nacionalidade}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
