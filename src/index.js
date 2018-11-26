import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MainIndex from './components/mainPage/main_index';
import VidoeIndex from './components/youtubePage/video_index';
import LearnPage from './components/learn/learn';
import Learn from './components/learn/seasonsProject/index';

class App extends Component{

  render(){
    return (
      <Router>
          <div>
            <nav className="navbar navbar-light bg-faded">
              <a className="navbar-brand"> NeedATitle </a>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <Link className="nav-link" to='/'> home </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/youtube'> youtube </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/learn'> comments </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/learnv2'> seasons </Link>
                </li>
              </ul>
            </nav>

            <Route path='/' exact component={MainIndex} />
            <Route path='/youtube' component={VidoeIndex} />
            <Route path='/learn' component={LearnPage} />
            <Route path='/learnv2' component={Learn} />
          </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
