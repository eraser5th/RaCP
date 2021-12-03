import React from 'react';
import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Card from './componets/Card';

const App: React.VFC = () => (
  <div className="app">
    <Header links={['link1', 'link2']} />
    <main className="main">
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
      <Card rounded />
    </main>
    <Footer links={['link1', 'link2']} />
  </div>
);

export default App;
