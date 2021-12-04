import React, { ReactElement } from 'react';
import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Card from './componets/Card';
import CardList from './componets/CardList';
import Button from './componets/Button';

type CardList = {
  onClick?: string;
  viewComponent: ReactElement;
}[]

const cardList: CardList = [
  {
    viewComponent: <Button label="primary button" />,
  },
  {
    viewComponent: <Button label="secondary button" theme="secondary" />,
  },
  {
    viewComponent: <Button label="rounded button" rounded />,
  },
  {
    viewComponent: <Button label="Large Button" size="lg" />,
  },
  {
    viewComponent: <Button label="Small Button" size="sm" />,
  },
  {
    viewComponent: <Button label="Warn Button" theme="warning" />,
  },
  {
    viewComponent: <Button label="Danger Button" theme="danger" />,
  },
  {
    viewComponent: <Button label="Light Button" theme="light" />,
  },
  {
    viewComponent: <Button label="Dark Button" theme="dark" />,
  },
  {
    viewComponent: <Button label="Info Button" theme="info" />,
  },
  {
    viewComponent: <Button label="Success Button" theme="success" />,
  },
];
const App: React.VFC = () => (
  <div className="app">
    <Header links={['link1', 'link2']} />
    <main className="main">
      <div className="main--inner">
        <CardList cardList={cardList} />
      </div>
    </main>
    <Footer links={['link1', 'link2']} />
  </div>
);

export default App;
