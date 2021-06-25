import React, { Component } from 'react'
import { myContext } from "../../Context";
import Contenido from '../General/Contenido';
import { Link } from 'react-router-dom';


const datos = [
    {Id: 1, Caso: 2073, Estado: 'EN CURSO', Paciente: 'Maria Fernanda Moreno Viveros', Doctor: 'Luis Antonio Moreno Mejia', Medicamento: 'ENTRECTINIB', FechaApertura: '19/5/2021 16:1:11', FechaCulminacion: '19/5/2021 16:1:11' },
    { Id: 2, Caso: 2074, Estado: 'EN CURSO', Paciente: 'Maria Fernanda Moreno Viveros', Doctor: 'Luis Antonio Moreno Mejia', Medicamento: 'ENTRECTINIB', FechaApertura: '19/5/2021 16:1:11', FechaCulminacion: '19/5/2021 16:1:11' },
    { Id: 3, Caso: 2075, Estado: 'EN CURSO', Paciente: 'Maria Fernanda Moreno Viveros', Doctor: 'Luis Antonio Moreno Mejia', Medicamento: 'ENTRECTINIB', FechaApertura: '19/5/2021 16:1:11', FechaCulminacion: '19/5/2021 16:1:11' },
    { Id: 4, Caso: 2076, Estado: 'EN CURSO', Paciente: 'Maria Fernanda Moreno Viveros', Doctor: 'Luis Antonio Moreno Mejia', Medicamento: 'ENTRECTINIB', FechaApertura: '19/5/2021 16:1:11', FechaCulminacion: '19/5/2021 16:1:11' },
    { Id: 5, Caso: 2077, Estado: 'EN CURSO', Paciente: 'Maria Fernanda Moreno Viveros', Doctor: 'Luis Antonio Moreno Mejia', Medicamento: 'ENTRECTINIB', FechaApertura: '19/5/2021 16:1:11', FechaCulminacion: '19/5/2021 16:1:11' }
];
const ContenidoMap = datos.map((datos) =>
    <tr key={datos.Id}>
        <td>
            <span className="badge badge-dot mr-4">
                <span className="status">{datos.Caso}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
                <span className="status">{datos.Estado}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
                <span className="status">{datos.Paciente}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
                <span className="status">{datos.Doctor}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
                <span className="status">{datos.Medicamento}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
                <i className="bg-warning" />
                <span className="status">{datos.FechaApertura}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
                <i className="bg-primary" />
                <span className="status">{datos.FechaCulminacion}</span>
            </span>
        </td>
        <td>
            <span className="badge badge-dot mr-4">
            <a href={`editar-caso/${datos.Caso}`}>
                 <button className="btn btn-block btn-sm btn-neutral">Editar</button>
            </a>
                <button className="btn btn-block btn-sm btn-danger mt-2">Eliminar</button>
            </span>
        </td>
    </tr>
);

export default class Casos extends Component {
    static contextType = myContext;


    render() {
        return (

            <Contenido categoria="Casos">
                <div className="table-responsive">
                    <table className="table align-items-center table-flush">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" className="sort" data-sort="caso">Caso</th>
                                <th scope="col" className="sort" data-sort="estado">Estado</th>
                                <th scope="col" className="sort" data-sort="paciente">Paciente</th>
                                <th scope="col" className="sort" data-sort="doctor">Doctor</th>
                                <th scope="col" className="sort" data-sort="medicamento">Medicamento</th>
                                <th scope="col" className="sort" data-sort="apertura">Apertura</th>
                                <th scope="col" className="sort" data-sort="culminacion">Culminación</th>
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
