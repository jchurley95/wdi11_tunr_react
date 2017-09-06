import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AllArtists from './components/AllArtists';
import Artist from './components/Artist';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import GlobalNav from './components/GlobalNav.js';
import { setAxiosDefaults } from './util';
import NewArtist from './components/NewArtist.js';
import UserProfile from './components/UserProfile.js';


class App extends Component {
  componentWillMount(){
    setAxiosDefaults();
  }
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={AllArtists}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route path="/artist/:id" component={Artist}/>
          <Route path="/artist/new" component={NewArtist}/>
          <Route exact path="/user/:id" component={UserProfile}/>

        </div>
      </Router>
    );
  }
}

export default App;
