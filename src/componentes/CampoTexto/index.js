import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (argumento) => {

    const placeholderModificada = `${argumento.placeholder}...`

    const[valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        argumento.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{argumento.label}</label>
            <input value={argumento.valor} onChange={aoDigitado} required={argumento.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto