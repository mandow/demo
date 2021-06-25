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
              <a className="nav-link" href="dashboard.html">
                <i className="ni ni-tv-2 text-red" />
                <span className="nav-link-text">Dashboard</span>
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
            <li className="nav-item">
              <a className="nav-link " href="/reportes">
                <i className="ni ni-bullet-list-67 text-red" />
                <span className="nav-link-text">Reportes</span>
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
