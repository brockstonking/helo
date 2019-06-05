import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='postDisplay'>
                <div className='theInside'>
                    <p className='postTitle'>{ this.props.title }</p>
                    <div className='userDisplay'>
                        <p>By { this.props.username }</p>
                        <img className='userImg' src={ this.props.profile_picture } alt='' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;