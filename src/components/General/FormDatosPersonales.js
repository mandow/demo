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
                                Cédula profesional
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
                                Cédula de especialidad
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
                                País
                            </label>
                            <select className="form-control">
                                <option>México</option>
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
                                Número Interior
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
                                Número Exterior
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
                                placeholder="Agregar descripción..."
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
                                #Teléfono
                            </label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mb-4">
                    Submit
                </button>
            </form>
            </div>
       
        )
    }
}
