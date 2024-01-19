
import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem"placeholder="Digite o endereço da sua imagem"/>
 
     
    </div>
  );
}

export default App;
//https://www.figma.com/file/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?type=design&node-id=134-128&mode=design&t=ocNzWSItYHSMQExE-0
