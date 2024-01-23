
import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores,colaborador])
  }
  return (

    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    <Time nomeTime="Programação"/>
    <Time nomeTime="Front-End"/>
    <Time nomeTime="Back-End"/>
    <Time nomeTime="Data Science"/>
    <Time nomeTime="Devops"/>
    <Time nomeTime="Suporte"/>
    </div>
  )
}

export default App;
//https://www.figma.com/file/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?type=design&node-id=134-128&mode=design&t=ocNzWSItYHSMQExE-0
