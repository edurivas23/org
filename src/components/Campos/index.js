import "./campo.css"


const Campo = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    const placeholderModifi = `${props.placeholder}...`

    const {type="text"} = props

    return <div className={`campo campo-${type}`}>

        <label>{props.titulo} </label>

        <input
            placeholder={placeholderModifi}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
            />

    </div>
}

export default Campo