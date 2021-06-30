import React, { Component } from 'react'
import Contenido from '../General/Contenido'
import FormDatosPersonales from '../General/FormDatosPersonales'

export default class AgregarDoctor extends Component {
    render() {
        return (
            <Contenido categoria="Agregar Doctor">
                <FormDatosPersonales origen="agregarDoctor" />
            </Contenido>
        )
    }
}
