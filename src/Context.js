import React, { Component } from 'react'
import { db} from './firebase';


// Create a context
export const myContext = React.createContext();

// Create a provider component
export class MyProvider extends Component {
  state = {
  }
  componentDidMount() {

  }

  InserData = ()=>{
    db.collection("cities").doc("LA").set({
        name: "Mexico",
        state: "TEX",
        country: "LA"
    })
    .then(() => {
        console.log("Se ha insertado correctamente");
    })
    .catch((error) => {
        console.error("Error al guardar el documento: ", error);
    });
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