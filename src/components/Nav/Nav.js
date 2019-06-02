import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <Router>
                <div>
                    Nav
                    <Link to='/dashboard' ><button>Home</button></Link>
                    <Link to='/post/:postid' ><button>New Post</button></Link>
                    <Link to='/' ><button>Logout</button></Link>

                </div>
            </Router>
        )
    }
}

export default Nav;