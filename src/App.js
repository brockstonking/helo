import React, { Component }  from 'react';
import './App.css';
import routes from './routes';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';

class App extends Component {
  constructor(props){
    super(props);
        }
        
  render(){
    return(
        <div>
        { routes }
      </div>
    )
  }
}

export default App;
