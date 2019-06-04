import React, { Component } from 'react';
import Nav from './../Nav/Nav';
import './Dashboard.css';
import { connect } from 'react-redux';
import axios from 'axios';


class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            checkBox: true,
            searchInput: '',
            posts: []
        }

        this.checkTheBox = this.checkTheBox.bind( this );
        this.getPosts = this.getPosts.bind( this );
    }

    async checkTheBox(){
        if (this.state.checkBox === true) {
            await this.setState({
                checkBox: false
            })
        } else if (this.state.checkBox === false) {
            await this.setState({
                checkBox: true
            })
        }
    }

    getPosts(){
        axios.get(`/posts/all/${ this.props.id }?userposts=${ this.state.checkBox }&search=${ this.state.searchInput }`)
        .then( results => {
            this.setState({
                posts: results
            })
        })
    }

    render(){
        const navbar = this.props.location.pathname !== '/' ? <Nav /> : <div></div>
        const posts = this.state.posts.map( e => {
            const post =  
            <div>
                <h1>{ e.title }</h1>
                <p>{ e.username }</p>
                <img src={ e.profile_picture } alt='' />
            </div>

            return post
        })

        return (
            <div>
                { navbar }
                <div className='dashboard'>
                    <div className='searchAndReset'>
                        <div>
                            <input className='searchBox' placeholder='Search by Title' />
                        </div>
                        <div>
                            <img className='searchIcon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAeJJREFUSA2tlM0rBGEcx3dWEREp4oBVrvsXLJEoTsR/QDk6ydt1E2ccuIniKGeEi4MLbY6SAzaRUt5C1uer9pkZM7PM2m99muf5vT0zz/yeJxLxUSaTKYch2IJzeIF7SMECdPikeUzWTwuJI9iSUA0HcAhpKIVm6IEWkG/UsqwUz9yiaAmswScsQ31QBr4uOIEnGAyKM3aCVFjB/caYY0CcXmYVPqA7MBTnCOiN/1Q4W4h4C/Rf9D9qs3bzxKifdwNLxhhiQF4V3MGiJw2juuIN6jzOPxrInYRnKHOlYNBnbbuMISfkx0Dqc6ZGmcRB7Za3aMcLkq9BtYxUXC2nPv6vVMPVvir+Ajog/5VqvDqLqPgVxJzGsGP2uoicBlAtIxXfh15jyW+QIK0CdCXYYtV2kDpta7gRuRtwBpYnE+MeHEOxx/mLgZxW0Oke9g3FEYdHWAHv6r5ZkQixTZCGXdAW+wvnALzDJlT6R9lWYhKgwtKM7QkYEaSrVJfQLYxDozOUeRTaYB20FTuQBGnKGes7JqgG5kHXr3QJR3AKDyDp5+lO+t4KnhMguRYI3F8CdSh0T+tI6+TpgKiP1W7HHPkMTyPiJ5jMwTS+WeMo1EALgOT6gkLVVwdlF9CXFF4sMAapL60vtT4ftHlFAAAAAElFTkSuQmCC' alt='' />
                        </div>
                        <div>
                            <button className='resetButton'>Reset</button>
                        </div>
                        <div>
                            <input id='myPosts' type='checkbox' checked={ this.state.checkBox } onChange={ this.checkTheBox }/>
                            <label htmlFor='myPosts'>My Posts</label>
                        </div>
                    </div>
                    
                </div>
                <div>
                    { posts }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { username, profilePicture, id } = state;
    return { username: username, profile_picture: profilePicture, id: id }
}

export default connect(mapStateToProps)(Dashboard);