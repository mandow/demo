import React, { Component } from 'react'
import { myContext } from '../../Context';

export default class Home extends Component {
    static contextType = myContext;
    render() {
        return (
            <div>
                Home               
            </div>
        )
    }
}
