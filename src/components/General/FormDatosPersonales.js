import React, { Component } from 'react'

export default class FormDatosPersonales extends Component {
    render(props) {
        return (
            <div className="container">
                       
            <form>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                Nombre
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                Apellido Paterno
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                Apellido Materno
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-12">
                        <div className="mb-3">
                        <label className="form-label">
                            Especialidad
                        </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                C??dula profesional
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                C??dula de especialidad
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                Pa??s
                            </label>
                            <select className="form-control">
                                <option>M??xico</option>
                                <option>USA</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                Estado
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                Ciudad
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                Municipio
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                Colonia
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                Calle
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                C.P.
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                N??mero Interior
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                            <label className="form-label">
                                N??mero Exterior
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label className="form-label">
                                Detalles Extra del domicilio
                            </label>
                            <textarea
                                className="form-control"
                                rows="6"
                                placeholder="Agregar descripci??n..."
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">
                                Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">
                                #Tel??fono
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mb-4">
                    Enviar
                </button>
            </form>
            </div>
       
        )
    }
}
