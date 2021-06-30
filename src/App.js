import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Casos from './components/Casos/Casos';
import Facturas from './components/Facturas/Facturas';
import Perfil from './components/Perfil/Perfil';
import Detalles from './components/Casos/Detalles';
import Reportes from './components/Reportes/Reportes'
import Producto from './components/Productos/Producto';
import Doctores from './components/Doctores/Doctores';
import AgregarDoctor from './components/Doctores/AgregarDoctor';
import Pacientes from './components/Pacientes/Pacientes'
import EditarDoctor from './components/Doctores/EditarDoctor';
import EditarPaciente from './components/Pacientes/EditarPaciente';
import AgregarPaciente from './components/Pacientes/AgregarPaciente';
import AgregarProducto from './components/Productos/AgregarProducto';
import EditarProducto from './components/Productos/EditarProducto';
import AgregarCaso from './components/Casos/AgregarCaso';

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
          <Route path="/agregar-caso">
            <AgregarCaso />
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
          <Route path="/productos">
            <Producto />
          </Route>
          <Route path="/doctores">
            <Doctores />
          </Route>
          <Route path="/pacientes">
            <Pacientes />
          </Route>
          <Route path="/editar-doctor">
            <EditarDoctor />
          </Route>
          <Route path="/agregar-doctor">
            <AgregarDoctor />
          </Route>
          <Route path="/agregar-paciente">
            <EditarPaciente />
          </Route>
          <Route path="/editar-paciente">
            <AgregarPaciente />
          </Route>
          <Route path="/editar-producto">
            <EditarProducto />
          </Route>
          <Route path="/agregar-producto">
            <AgregarProducto />
          </Route>
      </Layout>
    </Router>
    </MyProvider>
    
    );
  }
}

export default App;
