import React, { Component } from 'react';
import Nav from './../Nav/Nav';

class Dashboard extends Component {
    render(){
        const navbar = this.props.location.pathname !== '/' ? <Nav /> : <div></div>

        return (
            <div>
                
                { navbar }
                Dashboard
            </div>
        )
    }
}

export default Dashboard;