import React, { Component } from 'react'
import Contenido from '../General/Contenido'
import Expediente from './Expediente'
export default class Detalles extends Component {
    render(props) {
        return (
            <Contenido categoria="Editar Caso">

                <div className="col-xs-12 col-md-2">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link mb-2 btn-sm p-2 border border-1 active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Expediente</button>
                        <button className="nav-link mb-2 btn-sm p-2 border border-1" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Poducto</button>
                        <button className="nav-link mb-2 btn-sm p-2 border border-1" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Doctor</button>
                        <button className="nav-link mb-2 btn-sm p-2 border border-1" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Paciente</button>
                        <button className="nav-link mb-2 btn-sm p-2 border border-1" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Importación</button>
                        <button className="nav-link mb-2 btn-sm p-2 border border-1" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Entrega</button>
                    </div>
                </div>
                <div className="col-xs-12 col-md-8 card p-3">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <Expediente />
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                    </div>
                </div>
                <div className="d-xs-none col-md-2"></div>

            </Contenido>
        )
    }
}
