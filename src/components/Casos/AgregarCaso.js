import React, { Component } from 'react'
import Contenido from '../General/Contenido'

export default class AgregarCaso extends Component {
    render() {
        return (
            <Contenido categoria="Agregar Caso">
                 <div className="container">
                       
                       <form>
                           <div className="row">
                               <div className="col-12">
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
                               <div className="col-12">
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
                            </div>
                        </form>
                 </div>
                
            </Contenido>
        )
    }
}
