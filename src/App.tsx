import React from 'react';
import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Card from './componets/Card';

const App: React.VFC = () => {
  const length = 18;
  return (
    <div className="app">
      <Header links={['link1', 'link2']} />
      <main className="main">
        <div className="main--inner">
          <div className="main--cards">
            {new Array(length).fill(0).map(() => <Card rounded />)}
            {new Array(length % 4).fill(0).map(() => <div style={{ width: '300px', height: '300px' }} />)}
          </div>
        </div>
      </main>
      <Footer links={['link1', 'link2']} />
    </div>
  );
};

export default App;
