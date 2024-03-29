import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const corBordaPrimariaCSS = { borderColor: props.corPrimaria }
    const corSecundariaCSS = { backgroundColor: props.corSecundaria }

    return (
        props.colaboradores.length > 0 ? //renderiza somente se for maior que zero
            <section className='time' style={corSecundariaCSS}>
                <h3 style={corBordaPrimariaCSS}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador =>
                        <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
                </div>
            </section>
            : ''//fazer componente para aparecer aqui
    )
}
export default Time