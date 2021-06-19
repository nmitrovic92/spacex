import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LaunchesPage from './pages/LaunchesPage';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LaunchesPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
