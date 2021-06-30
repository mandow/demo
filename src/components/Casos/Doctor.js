import React, { Component } from 'react'

export default class Doctor extends Component {
    render() {
        return (
            <div>
            <div className="pl-lg-4">
                <div className=" p-3">
                    <div className="form-group">
                        <label className="form-control-label">Datos del Producto</label>
                        <form>
                            <div className="row">
                                <div className="col-xs-12 col-md-4">
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Nombre's
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
                                <div className="col-xs-12 col-md-12"><div className="mb-3">
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
                                            País
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
                                            Tipo de almacenamiento
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
                                            Comercializador
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
                                            Presentación
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>


                <hr className="my-4" />

            </div>

        </div>
        )
    }
}
