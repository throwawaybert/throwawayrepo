import React from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css';

class Navbar extends React.Component {

    render() {
        return (
            <div className="primary__light navbar-flex-container">
                <div className="navbar-icon navbar-icon-pull-right">
                    <i className="material-icons" onClick={this.props.onClick}>menu</i>
                </div>
                <div className="navbar-link-list">
                    <NavLink to='/home'>Home</NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar;