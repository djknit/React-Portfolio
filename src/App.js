import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import MainView from './views/main';
import ReadmeView from './views/readme';

function App() {

  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route
            path="readmes/:projectName"
            render={
              props => <ReadmeView
                {...props}
              />
            }
          />
          <Route
            render={
              props => <MainView
                {...props}
              />
            }
          />
        </Switch>
      </>
    </Router>
  );
}

export default App;
