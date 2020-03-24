import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import logo from "./logo.png";

import Navbar from './components/navbar';
import Graph from './components/graph';
import Grid from './components/grid';
import Page from './components/page';
import Footer from './components/footer';
import Block from './components/block';
import DatatablePage from './components/hospitals';

class App extends Component {
  render() {
    return (
      <div>


<Navbar></Navbar><br></br>

     
<Graph></Graph><br></br>

<Grid></Grid><br></br>

<DatatablePage></DatatablePage><br></br>

<Footer></Footer>
      </div>
      
    );
  }
}

export default App;
