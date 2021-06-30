import React, { Component } from 'react'
import Contenido from '../General/Contenido'
import FormDatosPersonales from '../General/FormDatosPersonales'

export default class EditarDoctor extends Component {
    render() {
        return (
            <Contenido categoria="Editar Doctors">
                <FormDatosPersonales origen="editarPaciente" />
            </Contenido>
        )
    }
}
