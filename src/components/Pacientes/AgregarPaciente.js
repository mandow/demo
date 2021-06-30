import React, { Component } from 'react'
import Contenido from '../General/Contenido'
import FormDatosPersonales from '../General/FormDatosPersonales'

export default class AgregarPaciente extends Component {
    render(props) {
        return (
            <Contenido categoria="Agregar Paciente">
                <FormDatosPersonales origen="agregarPaciente" />
            </Contenido>
        )
    }
}
