import React, { ReactElement } from 'react';
import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import CardList from './componets/CardList';
import Button from './componets/Button';

type CardList = {
  onClick?: string;
  viewComponent: ReactElement;
  path: string
}[]

const cardList: CardList = [
  {
    viewComponent: <Button label="primary button" />,
    path: 'primarybutton',
  },
  {
    viewComponent: <Button label="secondary button" theme="secondary" />,
    path: 'secondarybutton',
  },
  {
    viewComponent: <Button label="rounded button" rounded />,
    path: 'roundedbutton',
  },
  {
    viewComponent: <Button label="Large Button" size="lg" />,
    path: 'largebutton',
  },
  {
    viewComponent: <Button label="Small Button" size="sm" />,
    path: 'smallbutton',
  },
  {
    viewComponent: <Button label="Warn Button" theme="warning" />,
    path: 'warnbutton',
  },
  {
    viewComponent: <Button label="Danger Button" theme="danger" />,
    path: 'dangerbutton',
  },
  {
    viewComponent: <Button label="Light Button" theme="light" />,
    path: 'lightbutton',
  },
  {
    viewComponent: <Button label="Dark Button" theme="dark" />,
    path: 'darkbutton',
  },
  {
    viewComponent: <Button label="Info Button" theme="info" />,
    path: 'infobutton',
  },
  {
    viewComponent: <Button label="Success Button" theme="success" />,
    path: 'successbutton',
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
