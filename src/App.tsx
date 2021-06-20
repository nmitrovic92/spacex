import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import LaunchesPage from './pages/LaunchesPage/LaunchesPage';
import LaunchDetailsPage from './pages/LaunchDetailsPage/LaunchDetailsPage';
import { theme } from './theme';
import './App.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/launches" />
          </Route>
          <Route exact path="/launches">
            <LaunchesPage />
          </Route>
          <Route path="/launches/:id/rocket">
            <LaunchDetailsPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
