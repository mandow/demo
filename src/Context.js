import React, { Component } from 'react'
//import { db} from './firebase';


// Create a context
export const myContext = React.createContext();

// Create a provider component
export class MyProvider extends Component {
  state = {
  }
  componentDidMount() {

  }

  render() {
    return (
      <myContext.Provider value={{ 
        state: this.state, 
        InserData: this.InserData
        }}>
        {this.props.children}
      </myContext.Provider>
    )
  }
}