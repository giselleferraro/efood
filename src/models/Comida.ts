class Comida {
  description: string
  image: string
  star: string
  title: string
  id: number
  nacionalidade: string

  constructor(
    id: number,
    description: string,
    image: string,
    star: string,
    title: string,
    nacionalidade: string
  ) {
    //this.class = constructor
    this.id = id
    this.description = description
    this.image = image
    this.star = star
    this.title = title
    this.nacionalidade = nacionalidade

  }
}

export default Comida
