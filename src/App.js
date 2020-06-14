import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import Cart  from './components/Cart/Cart'
import Productlist from './components/Productlist'
import Default from './components/Default'
import Details from './components/Details'
import Model from './components/Model'

function App() {
  return (
    <div>

      <Navbar/>
      <Switch>
        <Route exact path='/' component={Productlist}/>
        <Route path='/details' component={Details}/>
        <Route path='/cart' component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Model/>
    </div>
  );
}
export default App;
