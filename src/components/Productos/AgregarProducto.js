import React, { Component } from 'react'
import Contenido from '../General/Contenido'

export default class AgregarProducto extends Component {
    render() {
        return (
            <Contenido categoria="Agregar Producto">
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
                                           Principio Activo
                                       </label>
                                       <input
                                           type="text"
                                           className="form-control"
                                       />
                                   </div>
                               </div>
                               <div className="col-xs-12 col-md-6">
                                   <div className="mb-3">
                                       <label className="form-label">
                                           Imagen
                                       </label>

                                       <input
                                           type="file"
                                           className="form-control"
                                       />
                                   </div>
                               </div>
                           </div>
                           <button type="submit" className="btn btn-primary mb-4">
                               Enviar
                           </button>
                       </form>
                       </div>
               
            </Contenido>
        )
    }
}
