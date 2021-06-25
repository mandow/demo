import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Casos from './components/Casos/Casos';
import Facturas from './components/Facturas/Facturas';
import Perfil from './components/Perfil/Perfil';
import Detalles from './components/Casos/Detalles';
import Reportes from './components/Reportes/Reportes'

import { MyProvider } from './Context';

class App extends Component {
  render() {
    return (
      <MyProvider> 
      <Router>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/facturas">
            <Facturas />
          </Route>
          <Route path="/casos">
            <Casos />
          </Route>
          <Route path="/editar-caso/:caso">
            <Detalles />
          </Route>
          <Route path="/reportes">
            <Reportes />
          </Route>
          <Route path="/perfil">
            <Perfil />
          </Route>
      </Layout>
    </Router>
    </MyProvider>
    
    );
  }
}

export default App;
