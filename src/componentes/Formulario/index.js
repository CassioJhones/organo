import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times =
        ['Programação', 'Front-End',
            'DataScience', 'Devops',
            'Mobile', 'Back-End']

    return (

        <section className='formulario'>
            <form>
                <h2>Preencha os Dados corretamente para criar o card</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem" />
                <ListaSuspensa label="Time" itens={times} />
                <Botao >Criar Card</Botao>
                <Botao>Cancelar</Botao>

            </form>
        </section>
    )
}

export default Formulario