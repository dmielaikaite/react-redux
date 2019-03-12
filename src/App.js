import React, { Component } from 'react';

import MainIndex from './components/mainPage/main_index';
import VidoeIndex from './components/youtubePage/video_index';
import LearnPage from './components/learn/learn';
import Learn from './components/learn/seasonsProject/index';
import Pictures from './components/learn/picturesApiProject/index';
import Forum from './components/learn/forumProject/index';
import Songs from './components/learn/songs/index';
import Posts from './components/learn/posts/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
                  <Link className="nav-link" to='/comments'> comments </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/seasons'> seasons </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/pictures'> picture </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/forum'> forum </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/songs'> Songs </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/posts'> Posts </Link>
                </li>
              </ul>
            </nav>

            <Route path='/' exact component={MainIndex} />
            <Route path='/youtube' component={VidoeIndex} />
            <Route path='/comments' component={LearnPage} />
            <Route path='/seasons' component={Learn} />
            <Route path='/pictures' component={Pictures} />
            <Route path='/forum' component={Forum} />
            <Route path='/songs' component={Songs} />
            <Route path='/posts' component={Posts} />
          </div>
      </Router>
    );
  }
}

export default App;
