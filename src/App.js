import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../src/App.css'

import HiddenNavbar from './navbar/hiddenNavbar';
import Navbar from './navbar/navbar';
import { CSSTransitionGroup } from 'react-transition-group';


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
    const currentNavbar = (this.state.navbarOpened ? <Navbar onClick={this.toggleNavbar} key="active-nav"/> : <HiddenNavbar toggle={this.toggleNavbar} key="hidden-nav"/> )

    return (
      <Router>
        <div className="coffee-flexbox-container">
          <CSSTransitionGroup
                transitionName="navbar"
                transitionAppear={false}
                transitionAppearTimeout={250}
                transitionEnter={true}
                transitionLeave={true}
                transitionLeaveTimeout={200}>
                  {currentNavbar}
          </CSSTransitionGroup>
        </div>
      </Router>
    );
  }
}

export default App;
