import React from 'react';
import './App.css';
import KrakenNav from '../Components/Navbar/KrakenNav';
import HomeworkDeck from '../Components/HomeworkDeck/HomeworkDeck';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FileDeck from '../Components/FileDeck/FileDeck';

function App() {
  return (
    <>
    <KrakenNav/>
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/" render={(props) => (
          <>
          <HomeworkDeck/>
          <FileDeck/>
          </>
        )}/>
        <Route exact path="/hw" render={(props) => (
          <HomeworkDeck/>
        )}/>
        <Route exact path="/files" render={(props) => (
          <FileDeck/>
        )}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
