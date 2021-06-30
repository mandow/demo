import React, { Component } from 'react'
import Medicamento from '../../assets/img/commun/descarga.jpg'
export default class Producto extends Component {
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
                                                Lote
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
                                                País de origen
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-4"><div className="mb-3">
                                        <label className="form-label">
                                            Marca
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
                                                Fecha de caducidad
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
                                                Principio activo
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
                    <div className="p-3">
                        <div className="row ">
                            <div className="col-xs-6 col-md-3 text-center">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={Medicamento} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Fotografia de caja superior
</h5>
                                        <a href="#" className="btn btn-primary">
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
