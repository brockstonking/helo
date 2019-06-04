import React, { Component }  from 'react';
import './App.css';
import routes from './routes';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import { Provider } from 'react-redux';
import store from './ducks/store';
 
class App extends Component {
  constructor(props){
    super(props);
        }
        
  render(){
    return(
        <Provider store={ store }>
          <Router>
            <div>
              { routes }
            </div>
          </Router>
        </Provider>
    )
  }
}

export default App;
