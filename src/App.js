import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import '../src/App.css';
import HiddenNavbar from './navbar/hiddenNavbar';
import Navbar from './navbar/navbar';
import Page from './body/body';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarOpened: false
        };

      this.toggleNavbar = this.toggleNavbar.bind(this);
  }

    toggleNavbar() {
        this.setState({
            navbarOpened: !this.state.navbarOpened
        });
    }

    render() {
        const currentNavbar = (this.state.navbarOpened ? <Navbar toggle={this.toggleNavbar} key="active-nav" /> : <HiddenNavbar toggle={this.toggleNavbar} key="hidden-nav" />)

        return (
            <Router>
                <div className="coffee-flexbox-container">
                    <CSSTransitionGroup
                        transitionName="navbar"
                        transitionAppear={false}
                        transitionEnter={true}
                        transitionEnterTimeout={250}
                        transitionLeave={true}
                        transitionLeaveTimeout={200}>
                            {currentNavbar}
                    </CSSTransitionGroup>
                    <Switch>
                        <Route path="/home" component={Page}/>
                        <Route path="/brews"/>
                        <Route path="/statistics"/>
                        <Route path="/experiments"/>
                    </Switch>
                </div>
              </Router>
        );
    }
}

export default App;
