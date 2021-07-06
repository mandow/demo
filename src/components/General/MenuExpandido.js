import React, { Component } from 'react'
import Logo from '../../assets/logotipo-Althacare-230x66.png'

export default class MenuExpandido extends Component {
    render() {
        return (
            <div>
                    <div className="scrollbar-inner">
      {/* Brand */}
      <div className="sidenav-header  align-items-center">
        <a className="navbar-brand" href="/">
          <img src={Logo} className="navbar-brand-img" alt="..." />
        </a>
      </div>
      <div className="navbar-inner">
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
          {/* Nav items */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                <i className="ni ni-tv-2 text-red" />
                <span className="nav-link-text">Inicio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/casos">
                <i className="ni ni-folder-17 text-red" />
                <span className="nav-link-text">Casos</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/facturas">
                <i className="ni ni-money-coins text-red" />
                <span className="nav-link-text">Facturacion</span>
              </a>
            </li>
            <li className="nav-item" >
              <a className="nav-link " href="/reportes">
                <i className="ni ni-bullet-list-67 text-red" />
                <span className="nav-link-text">Reportes</span>
              </a>
            </li>
            <li className="nav-item" hidden>
              <a className="nav-link " href="/doctores">
                <i className="ni ni-circle-08 text-red" />
                <span className="nav-link-text">Doctores</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/productos">
                <i className="ni ni-box-2 text-red" />
                <span className="nav-link-text">Productos</span>
              </a>
            </li>
            <li className="nav-item" hidden>
              <a className="nav-link " href="/pacientes">
                <i className="ni ni-satisfied text-red" />
                <span className="nav-link-text">Pacientes</span>
              </a>
            </li>
          </ul>
          {/* Divider */}
          <hr className="my-3" />
       
          {/* Navigation */}
          <ul className="navbar-nav mb-md-3">
            <li className="nav-item">
              <a className="nav-link active active-pro" >
              <i className="ni ni-single-02 text-red" />
                <span className="nav-link-text">Cerrar Sesión</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
            </div>
        )
    }
}
