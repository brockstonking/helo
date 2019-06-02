import React, { Component } from 'react';
import Nav from './../Nav/Nav';
import axios from 'axios';

class Auth extends Component {
    constructor(props){
        super(props);

        this.state = {
            inputEmail: '',
            inputPassword: ''
        }
        this.updateEmailInput = this.updateEmailInput.bind( this );
        this.updatePasswordInput = this.updatePasswordInput.bind( this );
        this.register = this.register.bind( this );
    }

    updateEmailInput(val){
        this.setState({
            inputEmail: val
        })
        console.log(this.state.inputEmail)
    }
    
    updatePasswordInput(val){
        this.setState({
            inputPassword: val
        })
        console.log(this.state.inputPassword)
    }

    register(){
        axios.post('http://localhost:3001/auth/register', { username: this.state.inputEmail, password: this.state.inputPassword })
        .then( results => {
            debugger
            console.log(results.data)
        })
        this.setState({
            inputEmail: '',
            inputPassword: ''
        })
    }

    render(){
        const navbar = this.props.location.pathname !== '/' ? <Nav /> : <div></div>
        return (
            <div>
                { navbar }
                <div>
                    <input placeholder='Username' onChange={ e => this.updateEmailInput(e.target.value) }></input>
                    <input placeholder='Password' onChange={ e => this.updatePasswordInput( e.target.value ) }></input>
                </div>
                <div>
                    <button>Login</button>
                    <button onClick={ this.register }>Register</button>
                </div>
            </div>
        )
    }
}

export default Auth;