import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const corBordaPrimariaCSS = { borderColor: props.corPrimaria }
    const corSecundariaCSS = { backgroundColor: props.corSecundaria }
    return (

        <section className='time' style={corSecundariaCSS}>
            <h3 style={corBordaPrimariaCSS}>{props.nomeTime}</h3>
            <Colaborador />
            <Colaborador />

        </section>

    )
}

export default Time