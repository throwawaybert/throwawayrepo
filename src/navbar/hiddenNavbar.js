import '../App.css';
import React from 'react';

class HiddenNavbar extends React.Component {
    render() {
        return (
            <div>
                <i class="material-icons navbar-icon" onClick={this.props.onClick}>menu</i>
            </div>
        )
    }
}

export default HiddenNavbar;