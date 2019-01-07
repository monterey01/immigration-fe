import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from './components/Footer.js'

import ReactDOM from 'react-dom'



import { Navigation, Main } from './components';



class App extends Component {

  render() {
    return (
      <div >

        <h1>React SPA Demo</h1>
        <Navigation />
        <Main />
        <Footer/>
      </div>
    );
  }
}

export default App;
