import './Formulario.css'
import Campo from '../Campos'
import ListaOpciones from '../listaOpciones'
import Boton from '../Boton/Boton'
import { useState } from 'react'

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo,actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")
    const{registrarColaborador, crearEquipo} = props

    const manejarEnvio = (event) => {
        event.preventDefault()

        let datosAEnviar ={
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo= (e)=>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario: color})
        
    }
    return <section className='formulario'>

        <form onSubmit={manejarEnvio}>

            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingrese Nombre"
                valor={nombre}
                actualizarValor={actualizarNombre}
                required />

            <Campo
                titulo="Puesto"
                placeholder="Ingrese Puesto"
                valor={puesto}
                actualizarValor={actualizarPuesto}
                required />

            <Campo
                titulo="Foto"
                placeholder="Ingrese URL"
                valor={foto}
                actualizarValor={actualizarFoto}
                required />

            <ListaOpciones
                titulo="Equipo"
                valor={equipo}
                actualizarEquipo={actualizarEquipo} 
                equipos={props.equipos}/>

            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear un equipo.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar Titulo"
                valor={titulo}
                actualizarValor={actualizarTitulo}
                required />

            <Campo
                titulo="Color"
                placeholder="Ingrese color en hex"
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
                required />
                <Boton>Registrar Equipo</Boton>
                </form>
    </section>
}

export default Formulario