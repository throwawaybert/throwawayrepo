import '../App.css';
import React from 'react';

class HiddenNavbar extends React.Component {
    render() {
        return (
            <div className="hidden-nav nav-icon">
                <i class="material-icons navbar-icon" onClick={this.props.toggle}>menu</i>
            </div>
        )
    }
}

export default HiddenNavbar;