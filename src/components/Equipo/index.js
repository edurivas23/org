import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"
const Equipo = (props) => {

    const { colorPrimario, titulo, id } = props.datos
    const estiloTitulo = { borderColor: colorPrimario }
    const estiloFondo = { backgroundColor: hexToRgba(colorPrimario, 0.6) }
    const { colaboradores, eliminarColaborador, actualizarColor,like} = props


    return < >
        {
            colaboradores.length > 0 &&
            <section className="equipo"
                style={estiloFondo}>

                    <input type="color" className="input-color" value={colorPrimario} onChange={(e)=> {
                        actualizarColor(e.target.value, id)
                    }}/>

                <h3 style={estiloTitulo}> {titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario} 
                            eliminarColaborador={eliminarColaborador} 
                            like={like}
                            />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo