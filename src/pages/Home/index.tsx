import ProductList from '../../components/ProductsList'
import Comida from '../../models/Comida'
import comida_japonesa from '../../asset/images/comida_japonesa.png'
import macarrao from '../../asset/images/macarrao.png'
import Banner from '../../components/Banner'

const cardapio: Comida[] = [
  {
    id: 1,
    star: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    image: comida_japonesa,
    nacionalidade: 'japonesa'
  },
  {
    id: 2,
    star: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    nacionalidade: 'italiana'
  },
  {
    id: 3,
    star: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    nacionalidade: 'italiana'
  },
  {
    id: 4,
    star: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    nacionalidade: 'italiana'
  },
  {
    id: 5,
    star: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    nacionalidade: 'italiana'
  },
  {
    id: 6,
    star: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    nacionalidade: 'italiana'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={cardapio} />
  </>
)

export default Home
