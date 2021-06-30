import React, { Component } from 'react'
import Contenido from '../General/Contenido'
import FormDatosPersonales from '../General/FormDatosPersonales'

export default class EditarPaciente extends Component {
    render(props) {
        return (
            <Contenido categoria="Editar Paciente">
                <FormDatosPersonales origen="editarPaciente" />
            </Contenido>
        )
    }
}
