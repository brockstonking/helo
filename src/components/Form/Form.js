import React, { Component } from 'react';
import Nav from './../Nav/Nav';
import axios from 'axios';
import './Form.css';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy67qKEMJNh_JsKfsEY3BTVbfSzvXi9F0QzwgKxC9fxTzYBEIb',
            content: ''
        }

        this.title = this.title.bind( this );
        this.image = this.image.bind( this );
        this.content = this.content.bind( this );
        this.post = this.post.bind( this );
    }

    title(val){
        this.setState({
            title: val
        })
    }

    image(val){
        this.setState({
            imageURL: val
        })
    }

    content(val){
        this.setState({
            content: val
        })
    }

    post(){
        axios.post(`/posts/create`, { title: this.state.title, image: this.state.imageURL, content: this.state.content })
        .then( results => {
        this.props.history.push('/Dashboard')
        })
    }

    render(){
        const navbar = this.props.location.pathname !== '/' ? <Nav /> : <div></div>

        return (
            <div className='formPage'>
                { navbar }
                <div className='addPostBox'>
                    <div className='newPostFormContainer'>
                        <h2 className='newPostTitle'>New Post</h2>
                        <div className='inputAreas'>
                            <div className='cont titleCont'>
                                <p className='header'>Title:</p>
                                <input className='inputBoxNewForm formTitle' onChange={ e => this.title( e.target.value ) } />
                            </div>
                            <img className='formImgPrev' src={ this.state.imageURL } alt='' />
                            <div className='cont URLCont'>
                                <p className='header'>Image URL:</p>
                                <input className='inputBoxNewForm formURL' onChange={ e => this.image( e.target.value ) } />
                            </div>
                            <div className='cont contentCont'>
                                <p className='header'>Content:</p>
                                <textarea rows='8' className='inputBoxNewForm formContent' onChange={ e => this.content( e.target.value ) } />
                            </div>
                        </div>
                        <div className='buttonPosition'>
                            <div></div>
                            <button className='postButton' onClick={ this.post } >Post</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;