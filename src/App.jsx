import reactlogo from "./assets/react.svg";
import Cabecalho from "../aula-rotas/src/components/cabecalho";
import Conteudo from "../aula-rotas/src/components/Conteudo";
export default function App() {
  
  
  //área declaratica

  let reactlogoTextoAlt = "Logo do React"
  return (
    <>
    {/* Área imperativa! */}

    
      {/* UM CABEÇALHO COM UM HEADER, um h1, uma lista ul com 3 itens com 3 links. */}
        <Cabecalho/> 
      {/* uma seção com uma Div com 3 paragrafos, com 3 linhas de lorem, uma imagem*/}
      <Conteudo reacLogoProps={reactLogo} reactLogoTextoAltProps={reactLogoTextoAlt}/>
      
      {/* Um rodapé com uma div, uma lista ul com 3 itens e links para redes sociaiis*/}
      <Rodape/>
    
    </>
  )
}
