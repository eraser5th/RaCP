import React from 'react';
import Card from './Card';
import './cardList.css';

const CardList: React.VFC<{cardList: any[]}> = ({ cardList }) => (
  <div className="card-list">
    {cardList.map(() => <Card title="test title" explain="test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text test text " rounded />)}
  </div>
);

export default CardList;
