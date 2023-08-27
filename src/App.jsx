import reactlogo from "./assets/react.svg"
import Cabecalho from "./components/cabecalho"

export default function App() {
  
  
  //área declaratica

  let reactlogoTextoAlt = "Logo do React"
  return (
    <>
    {/* Área imperativa! */}

    <div>
      {/* UM CABEÇALHO COM UM HEADER, um h1, uma lista ul com 3 itens com 3 links. */}
        <Cabecalho/>
      {/* uma seção com uma Div com 3 paragrafos, com 3 linhas de lorem, uma imagem*/}
      <section>
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, itaque dicta nisi molestiae rerum consequuntur totam eum in facere quos omnis corrupti ad aliquam, adipisci harum fuga similique. Est, quaerat.</p>
          <p>Placeat iure quod repellat adipisci dolores! Autem, explicabo cum et quasi, placeat iure reiciendis minus labore eius ullam tenetur? Consequatur, laboriosam tempore dicta excepturi facere nihil qui incidunt rem aliquid?</p>
          <p>Provident, expedita temporibus ipsum quod at totam. Cum nostrum ex repudiandae provident nam molestiae vero dolorem iste quam tempore, laboriosam natus placeat voluptates accusantium, officiis qui! Aperiam, voluptatem? Praesentium, architecto!</p>
          <img src={reactlogo} alt={reactlogoTextoAlt} />
        </div>
      </section>
      {/* Um rodapé com uma div, uma lista ul com 3 itens e links para redes sociaiis*/}
      <footer>
        <div>
          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">X</a></li>
            <li><a href="#">Reddit</a></li>
          </ul>
        </div>
      </footer>
    </div>
    
    </>

  )
}
