import React from 'react'
import ImagenPerfil from '../../assets/img/theme/team-4.jpg'
import MenuExpandido from '../General/MenuExpandido'

const Layout = (props) => {

    return (
        <div>
           <>
{/* Sidenav */}
<nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
  <MenuExpandido/>
</nav>
{/* Main content */}
<div className="main-content" id="panel">
{/* Topnav */}
<nav className="navbar navbar-top navbar-expand navbar-dark bg-danger border-bottom">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav align-items-center  ml-md-auto ">
        <li className="nav-item d-xl-none">
          {/* Sidenav toggler */}
          <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
            <div className="sidenav-toggler-inner">
              <i className="sidenav-toggler-line" />
              <i className="sidenav-toggler-line" />
              <i className="sidenav-toggler-line" />
            </div>
          </div>
        </li>
</ul>
      <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
        <li className="nav-item dropdown">
          <div className="nav-link pr-0" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="media align-items-center">
              <span className="avatar avatar-sm rounded-circle">
                <img alt="imagen de placeholder" src={ImagenPerfil} />
              </span>
              <div className="media-body  ml-2  d-none d-lg-block">
                <span className="mb-0 text-sm  font-weight-bold">John Snow</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* Header */}
<div className="header bg-danger pb-6">
  <div className="container-fluid">
    <div className="header-body">
     
    </div>
  </div>
</div>
{/* Page content */}
{props.children}
</div>
{/* Argon Scripts */}
</>

        </div>
    )
}

export default Layout;


