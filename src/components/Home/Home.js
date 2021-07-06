import React, { Component } from 'react'
import { myContext } from '../../Context';
import LogoRoche from '../../assets/img/brand/logo roche.png'

export default class Home extends Component {
    static contextType = myContext;
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-8 p-md-6">
                    <h1>Bienvenido a su plataforma de uso compasivo</h1>

                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                    enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                    hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat

                    nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit prae-
                    sent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                    enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    </div>
                    <div className="col-xs-12 col-md-4 p-xs-3 p-md-6">
                        <img src={LogoRoche} alt="logo roche" className="img-fluid"/>
                    </div>
                </div>          
            </div>
        )
    }
}
