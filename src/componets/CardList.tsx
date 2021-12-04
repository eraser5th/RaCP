import React from 'react';
import Button from './Button';
import Card from './Card';
import './cardList.css';
import ComponentViewCard from './ComponentViewCard';

const CardList: React.VFC<{cardList: any[]}> = ({ cardList }) => (
  <div className="card-list">
    {cardList.map((item) => (
      <ComponentViewCard>
        <Button label="button" />
      </ComponentViewCard>
    ))}
  </div>
);

export default CardList;
