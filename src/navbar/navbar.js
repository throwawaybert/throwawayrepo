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
                    <NavLink to='/home' className="navbar-link-item">Home</NavLink>
                    <NavLink to='/brews' className="navbar-link-item">Brews</NavLink>
                    <NavLink to='/statistics' className="navbar-link-item">Statistics</NavLink>
                    <NavLink to='/experiments' className="navbar-link-item">Experiments</NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar;