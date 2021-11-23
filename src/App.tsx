import React from 'react';
import Logo from './logo';
import './App.css';

const App: React.VFC = () => (
  <div className="App">
    <header className="App-header">
      <Logo />
      <p>
        Edit
        {' '}
        <code>src/App.tsx</code>
        {' '}
        and save to reload.
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

export default App;
