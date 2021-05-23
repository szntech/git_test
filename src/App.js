import logo from './logo.svg';
//import './App.css';
import "./css/common.css";
import "./css/style.css";

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Customer from './customer';
import Img from './Logo.png';
import Home from './home';
import CreateQuote from "./createQuote";
import Quotes from './quotes';
import Customers from "./Customers";
import myHeader from "./header";
import AddCustomer from './addCustomer'

function App() {



console.log('hell')


  return (<>
    <Router>

      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/createQuote" component={CreateQuote} />
        <Route path="/addCustomer" component={AddCustomer} />
        <Route path="/" component={myHeader} />
      </Switch>
      
      <Route path="/quotes/:quoteid" component={Quotes} />
     
      <Route path="/customers/:type" component={Customers} />
      

    </Router>



    {/* <header className='logoHeader'><img src={Img}></img></header>
    <Customer/>*/}
  </>
  );
}

export default App;
