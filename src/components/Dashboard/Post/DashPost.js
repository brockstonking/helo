import React, { Component } from 'react';
import './DashPost.css';
import { Link } from 'react-router-dom';

class Post extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
                <Link to={`/post/${ this.props.postId }`} className='links' >
                    <div className='postDisplay'>
                        <div className='theInside'>
                            <p className='postMapTitle'>{ this.props.title }</p>
                            <div className='userDisplay'>
                                <p>By { this.props.username }</p>
                                <img className='userImg' src={ this.props.profile_picture } alt='' />
                            </div>
                        </div>
                    </div>
                </Link>
        )
    }
}

export default Post;