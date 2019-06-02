import React, { Component } from 'react';
import Nav from './../Nav/Nav';

class Form extends Component {
    render(){
        const navbar = this.props.location.pathname !== '/' ? <Nav /> : <div></div>

        return (
            <div>
                Form
                { navbar }
            </div>
        )
    }
}

export default Form;