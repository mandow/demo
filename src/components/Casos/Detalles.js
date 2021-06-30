import React, { Component } from 'react'
import Contenido from '../General/Contenido'
import Expediente from './Expediente'
import Producto from './Producto'
import Doctor from './Doctor'
import Paciente from './Doctor'
import Importacion from './Importacion'
import Entrega from './Entrega'

export default class Detalles extends Component {
    render(props) {
        return (
            <Contenido categoria="Editar Caso">

                <div className="col-xs-12 col-md-2">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link mb-2 btn-sm p-2 border border-1 active" id="v-expediente-tab" data-bs-toggle="pill" data-bs-target="#v-expediente" type="button" role="tab" aria-controls="v-expediente" aria-selected="true">Expediente</button>
                        <button className="nav-link mb-2 btn-sm p-2 border border-1" id="v-producto-tab" data-bs-toggle="pill" data-bs-target="#v-producto" type="button" role="tab" aria-controls="v-producto" aria-selected="false">Poducto</button>
                        <button className="nav-link mb-2 btn-sm p-2 border border-1" id="v-doctor-tab" data-bs-toggle="pill" data-bs-target="#v-doctor" type="button" role="tab" aria-controls="v-doctor" aria-selected="false" hidden>Doctor</button>
                        <button className="nav-link mb-2 btn-sm p-2 border border-1" id="v-paciente-tab" data-bs-toggle="pill" data-bs-target="#v-paciente" type="button" role="tab" aria-controls="v-paciente" aria-selected="false" hidden>Paciente</button>
                        <button className="nav-link mb-2 btn-sm p-2 border border-1" id="v-importacion-tab" data-bs-toggle="pill" data-bs-target="#v-importacion" type="button" role="tab" aria-controls="v-importacion" aria-selected="false">Importación</button>
                        <button className="nav-link mb-2 btn-sm p-2 border border-1" id="v-entrega-tab" data-bs-toggle="pill" data-bs-target="#v-entrega" type="button" role="tab" aria-controls="v-entrega" aria-selected="false">Entrega</button>
                    </div>
                </div>
                <div className="col-xs-12 col-md-9 card p-3" style={{height:'69vh', overflowY:'auto'}}>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-expediente" role="tabpanel" aria-labelledby="v-expediente-tab">
                            <Expediente />
                        </div>
                        <div className="tab-pane fade" id="v-producto" role="tabpanel" aria-labelledby="v-producto-tab">
                            <Producto/>
                        </div>
                        <div className="tab-pane fade" id="v-doctor" role="tabpanel" aria-labelledby="v-doctor-tab">
                            <Doctor/>
                        </div>
                        <div className="tab-pane fade" id="v-paciente" role="tabpanel" aria-labelledby="v-paciente-tab">
                            <Paciente/>
                        </div>
                        <div className="tab-pane fade" id="v-importacion" role="tabpanel" aria-labelledby="v-importacion-tab">
                            <Importacion/>
                        </div>
                        <div className="tab-pane fade" id="v-entrega" role="tabpanel" aria-labelledby="v-entrega-tab">
                            <Entrega/>
                        </div>
                    </div>
                </div>
                <div className="d-xs-none col-md-1"></div>

            </Contenido>
        )
    }
}
