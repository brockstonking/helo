import React, { Component } from 'react';
import Nav from './../Nav/Nav';
import axios from 'axios';
import './Post.css';

class Post extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            image: '',
            content: '',
            username: '',
            profilePicture: ''
        }
    }

    componentDidMount(){
        axios.get(`/posts/${ this.props.match.params.postid }`)
        .then( results => {
            const { title, image, content, username, profile_picture } = results.data[0]
            this.setState({
                title: title,
                image: image,
                content: content,
                username: username,
                profilePicture: profile_picture
            })
        })

    }

    render(){
        const navbar = this.props.location.pathname !== '/' ? <Nav /> : <div></div>

        return (
            <div className='leftPadding'>
                { navbar }
                <div className='postBlockDisplay'>
                    <div className='titleAndImage'>
                        <h2 className='postTitle'>{ this.state.title }</h2>
                        <img className='postImage' src={ this.state.image } alt='Post Image' />
                    </div>
                    <div className='authContentDiv'>
                        <div className='authDiv'>
                            <p className='authUsername'>{ this.state.username }</p>
                            <img className='authPicture' src={ this.state.profilePicture } alt='User Thumbnail' />
                        </div>
                        <div className='contentDiv'>
                            <p className='postContent'>{ this.state.content }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;