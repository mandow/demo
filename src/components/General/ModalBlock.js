import React, { Children, Component } from 'react'

export default class ModalBlock extends Component {
    render(props) {
        return (
        <div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel"></h5>
                <button type="button" className="btn-close btn" data-bs-dismiss="modal" aria-label="Close">X</button>
              </div>
              <div className="modal-body">
                {this.props.children}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
