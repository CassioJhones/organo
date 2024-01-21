import './Botao.css'

const Botao = (argumento) => {

    return (
        <button className='botao'>{argumento.children}</button>
    )
}

export default Botao