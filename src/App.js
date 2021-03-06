import React from 'react';
import LogIn from './components/LogIn';
import ErrorPage from './components/ErrorPage';
import './assets/styles/index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="page-heading">User APP</h1>
        <Switch>
          <Route path='/' exact component={LogIn} />
          <Route path='/register' exact component={Register} />
          <Route path='/home' exact component={Home} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
