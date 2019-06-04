import React, { Component } from 'react';

class Post extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <p>{ this.props.username }</p>
                <img src={ this.props.profile_picture } alt='' />
            </div>
        )
    }
}

export default Post;