import './CampoTexto.css'

const CampoTexto = (argumento) => {
    
    return (
        <div className="campo-texto">
            <label>{argumento.label}</label>
            <input required={argumento.obrigatorio} placeholder={argumento.placeholder}/>
        </div>
    )
}

export default CampoTexto