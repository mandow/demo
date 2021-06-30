import React, { Component } from 'react'
import Contenido from '../General/Contenido'

const datos = [
    { Id: 1, nombre: 'Dan Joe Mars', especialidad: 'Oncología Médica', cedulaP: '11522112', direccion: 'Luis Antonio Moreno Mejia 203, Apodaca,NL.', email: 'ejemplo@ejemplo.com', telefono: '8111121314' },
    { Id: 2, nombre: 'Mars Dan Joe ', especialidad: 'Oncología Médica', cedulaP: '11522112', direccion: 'Luis Antonio Moreno Mejia 203, Apodaca,NL.', email: 'ejemplo@ejemplo.com', telefono: '8111121314' },
    { Id: 3, nombre: 'Dan Joe Mars', especialidad: 'Oncología Médica', cedulaP: '11522112', direccion: 'Luis Antonio Moreno Mejia 203, Apodaca,NL.', email: 'ejemplo@ejemplo.com', telefono: '8111121314' },
    { Id: 4, nombre: 'Mars Joe Dan', especialidad: 'Oncología Médica', cedulaP: '11522112', direccion: 'Luis Antonio Moreno Mejia 203, Apodaca,NL.', email: 'ejemplo@ejemplo.com', telefono: '8111121314' }
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
                <span className="status">{datos.especialidad}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
                <span className="status">{datos.cedulaP}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
                <span className="status">{datos.direccion}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
                <span className="status">{datos.email}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
                <i className="bg-warning" />
                <span className="status">{datos.telefono}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
                <a href={`editar-doctor/${datos.Id}`}>
                    <button className="btn btn-block btn-sm btn-neutral">Editar</button>
                </a>
                <button className="btn btn-block btn-sm btn-danger mt-2">Eliminar</button>
            </span>
        </td>
    </tr>
);

export default class Doctores extends Component {
    render() {
        return (

            <Contenido categoria="Doctores">
                <div className="mb-3 text-right">
                    <a href={`agregar-doctor`}>
                        <button className="btn btn-primary ">Agregar Doctor</button>
                    </a>
                </div>
                <div className="table-responsive">
                    <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" className="sort" data-sort="nombre">Nombre</th>
                                <th scope="col" className="sort" data-sort="especialidad">Especialidad</th>
                                <th scope="col" className="sort" data-sort="cedula">Cédula Profesional</th>
                                <th scope="col" className="sort" data-sort="direccion">Dirección</th>
                                <th scope="col" className="sort" data-sort="correo">Email</th>
                                <th scope="col" className="sort" data-sort="telefono">Teléfono</th>
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
