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
    viewComponent: <Button theme="primary" label="Primary R" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/primary-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="secondary" label="Secondary R" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/secondary-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="success" label="Success R" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/success-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="danger" label="Danger R" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/danger-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="warning" label="Warning R" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/warning-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="info" label="Info R" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/info-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="light" label="Light R" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/light-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="dark" label="Dark R" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/dark-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="primary" label="primary" />,
    codeViewPage: <ButtonPage />,
    path: '/primary-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="secondary" label="secondary" />,
    codeViewPage: <ButtonPage />,
    path: '/secondary-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="success" label="success" />,
    codeViewPage: <ButtonPage />,
    path: '/success-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="danger" label="danger" />,
    codeViewPage: <ButtonPage />,
    path: '/danger-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="warning" label="warning" />,
    codeViewPage: <ButtonPage />,
    path: '/warning-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="info" label="info" />,
    codeViewPage: <ButtonPage />,
    path: '/info-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="light" label="light" />,
    codeViewPage: <ButtonPage />,
    path: '/light-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="primary" label="Small Primary" size="sm" />,
    codeViewPage: <ButtonPage />,
    path: '/small-primary-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="secondary" label="Small Secondary" size="sm" />,
    codeViewPage: <ButtonPage />,
    path: '/small-secondary-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="success" label="Small Success" size="sm" />,
    codeViewPage: <ButtonPage />,
    path: '/small-success-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="danger" label="Small Danger" size="sm" />,
    codeViewPage: <ButtonPage />,
    path: '/small-danger-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="warning" label="Small Warning" size="sm" />,
    codeViewPage: <ButtonPage />,
    path: '/small-warning-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="info" label="Small Info" size="sm" />,
    codeViewPage: <ButtonPage />,
    path: '/small-info-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="light" label="Small Light" size="sm" />,
    codeViewPage: <ButtonPage />,
    path: '/small-light-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="dark" label="Small Dark" size="sm" />,
    codeViewPage: <ButtonPage />,
    path: '/small-dark-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="primary" label="Small Primary R" size="lg" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/large-primary-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="secondary" label="Small Secondary R" size="lg" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/large-secondary-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="success" label="Small Success R" size="lg" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/large-success-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="danger" label="Small Danger R" size="lg" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/large-danger-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="warning" label="Small Warning R" size="lg" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/large-warning-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="info" label="Small Info R" size="lg" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/large-info-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="light" label="Small Light R" size="lg" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/large-light-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="dark" label="Small Dark R" size="lg" rounded />,
    codeViewPage: <ButtonPage />,
    path: '/large-dark-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="primary" label="Large Primary" size="lg" />,
    codeViewPage: <ButtonPage />,
    path: '/large-primary-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="secondary" label="Large Secondary" size="lg" />,
    codeViewPage: <ButtonPage />,
    path: '/large-secondary-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="success" label="Large Success" size="lg" />,
    codeViewPage: <ButtonPage />,
    path: '/large-success-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="danger" label="Large Danger" size="lg" />,
    codeViewPage: <ButtonPage />,
    path: '/large-danger-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="warning" label="Large Warning" size="lg" />,
    codeViewPage: <ButtonPage />,
    path: '/large-warning-button',
  },
  {
    onClick: '',
    path: '/large-info-button',
    viewComponent: <Button theme="info" label="Large Info" size="lg" />,
    codeViewPage: <ButtonPage />,
  },
  {
    onClick: '',
    viewComponent: <Button theme="light" label="Large Light" size="lg" />,
    codeViewPage: <ButtonPage />,
    path: '/large-light-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="dark" label="Large Dark" size="lg" />,
    codeViewPage: <ButtonPage />,
    path: '/large-dark-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="primary" label="Large Primary A" size="lg" withArrow />,
    codeViewPage: <ButtonPage />,
    path: '/large-primary-arrow-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="secondary" label="Large Secondary A" size="lg" withArrow />,
    codeViewPage: <ButtonPage />,
    path: '/large-secondary-arrow-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="success" label="Large Success A" size="lg" withArrow />,
    codeViewPage: <ButtonPage />,
    path: '/large-success-arrow-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="danger" label="Large Danger A" size="lg" withArrow />,
    codeViewPage: <ButtonPage />,
    path: '/large-danger-arrow-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="warning" label="Large Warning A" size="lg" withArrow />,
    codeViewPage: <ButtonPage />,
    path: '/large-warning-arrow-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="info" label="Large Info A" size="lg" withArrow />,
    codeViewPage: <ButtonPage />,
    path: '/large-info-arrow-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="light" label="Large Light A" size="lg" withArrow />,
    codeViewPage: <ButtonPage />,
    path: '/large-light-arrow-button',
  },
  {
    onClick: '',
    viewComponent: <Button theme="dark" label="Large Dark A" size="lg" withArrow />,
    codeViewPage: <ButtonPage />,
    path: '/large-dark-arrow-button',
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
