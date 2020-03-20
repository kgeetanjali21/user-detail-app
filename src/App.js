import React from 'react';
import LogIn from './components/LogIn';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="page-heading">User APP</h1>
        <Switch>
          <Route path='/' exact component={LogIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
