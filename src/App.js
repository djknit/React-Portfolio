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
          {/* A Readme route will be created in the future. For now I am using regular html documents */}
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
