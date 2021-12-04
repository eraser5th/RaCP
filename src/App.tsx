import React from 'react';
import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Card from './componets/Card';
import CardList from './componets/CardList';

const App: React.VFC = () => {
  const length = 18;
  return (
    <div className="app">
      <Header links={['link1', 'link2']} />
      <main className="main">
        <div className="main--inner">
          <CardList cardList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]} />
        </div>
      </main>
      <Footer links={['link1', 'link2']} />
    </div>
  );
};

export default App;
