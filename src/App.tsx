import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import CardList from './componets/CardList';
import Button from './componets/Button';
import ButtonPage from './pages/ButtonPage';

type CardList = {
  onClick?: string;
  viewComponent: ReactElement;
  codeViewPage: ReactElement;
  path: string
}[]

const cardList: CardList = [
  {
    onClick: '',
    viewComponent: <Button theme="primary" label="Primary" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/primary-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="secondary" label="Secondary" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/secondary-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="success" label="Success" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/success-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="danger" label="Danger" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/danger-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="warning" label="Warning" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/warning-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="info" label="Info" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/info-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="light" label="Light" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/light-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="dark" label="Dark" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/dark-button',
  },
];

const App: React.VFC = () => (
  <div className="app">
    <Header links={[]} />
    <main className="main">
      <div className="main--inner">
        <Routes>
          <Route path="/" element={<CardList cardList={cardList} />} />
          {cardList.map(({ path, codeViewPage }) => (
            <Route path={path} element={codeViewPage} />
          ))}
        </Routes>
      </div>
    </main>
    <Footer links={[]} />
  </div>
);

export default App;
