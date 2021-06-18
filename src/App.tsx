import React from 'react';
import { useQuery } from '@apollo/client';
import { SPACE_X_MISSIONS } from './api/missions';
import logo from './logo.svg';
import './App.scss';

function App() {
  const { loading, error, data } = useQuery(SPACE_X_MISSIONS, {});
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
