import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ShareIdea from './components/ShareIdea/ShareIdea';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/shareIdea">
          <Dashboard>
            <ShareIdea />
          </Dashboard>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Dashboard>
          <Home />
          </Dashboard>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
