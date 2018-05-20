import '../App.css';
import React from 'react';

class HiddenNavbar extends React.Component {
    render() {
        return (
            <div className="hidden-nav primary__dark" onClick={this.props.toggle}>
                <i className="material-icons hidden-nav-icon">menu</i>
            </div>
        )
    }
}

export default HiddenNavbar;