import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (

        <section className='formulario'>
            <form>
                <h2>Preencha os Dados corretamente</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem" />
            </form>
        </section>
    )
}

export default Formulario