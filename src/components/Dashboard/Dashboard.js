import React, { Component } from 'react';
import Nav from './../Nav/Nav';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            checkBox: true
        }

        this.checkTheBox = this.checkTheBox.bind( this );
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
        console.log(this.state.checkBox)
    }
    
    render(){
        const navbar = this.props.location.pathname !== '/' ? <Nav /> : <div></div>

        return (
            <div>
                { navbar }
                <div className='dashboard'>
                    <div>
                        <input className='searchBox' placeholder='Search by Title' />
                    </div>
                    <div>
                        <img />
                    </div>
                    <div>
                        <img />
                    </div>
                    <div>
                        <input type='checkbox' checked={ this.state.checkBox } onChange={ this.checkTheBox }/>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default Dashboard;