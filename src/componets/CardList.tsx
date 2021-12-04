import React from 'react';
import Card from './Card';
import './cardList.css';

const CardList: React.VFC<{cardList: any[]}> = ({ cardList }) => (
  <div className="card-list">
    {cardList.map(() => <Card rounded />)}
  </div>
);

export default CardList;
