import { Card, Descricao, Nota, Titulo } from './styles'
import estrela from '../../asset/images/estrela.png'
import Tag from '../Tag'
import Button from '../Button'

type Props = {
  title: string
  description: string
  star: string
  image: string
  nacionalidade: string
}

const Product = ({ title, description, star, image, nacionalidade }: Props) => (
  <Card>
    <Tag size="small">{nacionalidade}</Tag>
    <img src={image} alt={title} />
    {/* <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos> */}
    <Titulo>{title}</Titulo>
    <Nota>{star}</Nota>
    <img src={estrela} />
    <Descricao>{description}</Descricao>
    <Button
            type="link"
            to="/produto"
            title="Clique aqui para aproveitar a oferta"
          >
            Saiba mais
    </Button>
  </Card>
)

export default Product
