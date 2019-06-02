import React, { Component } from 'react';
import Nav from './../Nav/Nav';

class Post extends Component {
    render(){
        const navbar = this.props.location.pathname !== '/' ? <Nav /> : <div></div>

        return (
            <div>
                Post
                { navbar }
            </div>
        )
    }
}

export default Post;