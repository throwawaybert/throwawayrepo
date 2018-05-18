import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../src/App.css'

import HiddenNavbar from './navbar/hiddenNavbar';
import Navbar from './navbar/navbar';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      navbarOpened: false
    };

      this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar(){
    this.setState({
      navbarOpened: !this.state.navbarOpened
    });
  }

  render() {
    const currentNavbar = (this.state.navbarOpened ? <Navbar onClick={this.toggleNavbar}/> : <HiddenNavbar onClick={this.toggleNavbar}/> )

    return (
      <Router>
        <div className="coffee-flexbox-container">
          {currentNavbar}
        </div>
      </Router>
    );
  }
}

export default App;
