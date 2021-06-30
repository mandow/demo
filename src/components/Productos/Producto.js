import React, { Component } from 'react'
import Contenido from '../General/Contenido'

const datos = [
    { Id: 1, nombre: 'ENTRECTINIB', principioActivo: 'ACTIVO 001', imagenes: '11522112' },
    { Id: 2, nombre: 'ENTRECTINIB', principioActivo: 'ACTIVO 001', imagenes: '11522112' },
    { Id: 3, nombre: 'ENTRECTINIB', principioActivo: 'ACTIVO 001', imagenes: '11522112' },
    { Id: 4, nombre: 'ENTRECTINIB', principioActivo: 'ACTIVO 001', imagenes: '11522112' },
    { Id: 5, nombre: 'ENTRECTINIB', principioActivo: 'ACTIVO 001', imagenes: '11522112' }
];

const ContenidoMap = datos.map((datos) =>
    <tr key={datos.Id}>
        <td>
            <span className="badge badge-dot mr-4">
                <span className="status">{datos.nombre}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
                <span className="status">{datos.principioActivo}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
                <a href={`editar-prorducto/${datos.Id}`}>
                    <button className="btn btn-block btn-sm btn-neutral">Editar</button>
                </a>
                <button className="btn btn-block btn-sm btn-danger mt-2">Eliminar</button>
            </span>
        </td>
    </tr>
);

export default class Producto extends Component {
    render() {
        return (
            <Contenido categoria="Productos">
                <div className="mb-3 text-right">
                    <a href={`agregar-producto`}>
                        <button className="btn btn-primary ">Agregar Producto</button>
                    </a>
                </div>
                <div className="table-responsive">
                    <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" className="sort" data-sort="nombre">Nombre</th>
                                <th scope="col" className="sort" data-sort="especialidad">Principio Activo</th>
                                <th scope="col" className="sort" data-sort="acciones">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="list">
                            {ContenidoMap}
                        </tbody>
                    </table>
                </div>
            </Contenido>
        )
    }
}
