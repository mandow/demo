import React from 'react'
import FooterContenido from './FooterContenido'

const Contenido = (props) => {
  return (

    <div className="container-fluid mt--6">
            <div className="row justify-content-center">
              <div className=" col ">
                <div className="card">
                  <div className="card-header bg-transparent">
                    <h3 className="mb-1">{props.categoria}</h3>
                  </div>
                  <div className="card-body">
                    <div className="row icon-examples">
                      {props.children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer */}
            <FooterContenido/>
          </div>
      
      )
    }
    
    export default Contenido
