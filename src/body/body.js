import React from 'react';
import '../App.css';

class Page extends React.Component {
    render() {
        var navbarClass = "page-body ";
        navbarClass += this.props.navbarOpen ? "page-body-navbar-open" : "page-body-navbar-closed";
        return(
            <div className={navbarClass}>
                <p>null</p>
            </div>
        )
    }
}

export default Page;