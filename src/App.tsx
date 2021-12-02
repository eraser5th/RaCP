import React from 'react';
import Logo from './logo';
import './App.css';
import Header from './componets/Header';

const App: React.VFC = () => (
  <div className="app">
    <Header links={['link1', 'link2']} />
    <header className="app-header">
      <Logo />
      <p>
        Edit
        {' '}
        <code>src/App.tsx</code>
        {' '}
        and save to reload.
      </p>
      <a
        className="app-link"
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
