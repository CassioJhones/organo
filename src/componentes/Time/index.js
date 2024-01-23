import './Time.css'

const Time = (props) => {
    const estiloCSS = { backgroundColor: props.corSecundaria }
    return (

        <section className='time' style={estiloCSS}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nomeTime}</h3>
        </section>

    )
}

export default Time