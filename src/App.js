
import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {

  const times = [

    {
      nome: 'Programação', corPrimaria: '#57c278', corSecundaria: '#d9f7e9'
    },

    {
      nome: 'Front-End', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF'
    },

    {
      nome: 'DataScience', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2'
    },

    {
      nome: 'Devops', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8'
    },

    {
      nome: 'Mobile', corPrimaria: '#D86EBF', corSecundaria: '#FAE5F5'
    },

    {
      nome: 'Back-End', corPrimaria: '#FEBA05', corSecundaria: '#FFF5D9'
    },


  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }
  return (

    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nomeTime)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time
        key={time.nome}
        nomeTime={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador=>colaborador.time===time.nomeTime)}
      />)}

    </div>
  );
}

export default App;
//https://www.figma.com/file/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?type=design&node-id=134-128&mode=design&t=ocNzWSItYHSMQExE-0
