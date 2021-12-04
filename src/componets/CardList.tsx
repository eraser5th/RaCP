import React, { ReactElement } from 'react';
import Button from './Button';
import './cardList.css';
import ComponentViewCard from './ComponentViewCard';

type CardListProps = {
  cardList: {
    onClick?: string;
    viewComponent: ReactElement;
  }[]
}
const CardList: React.VFC<CardListProps> = ({ cardList }) => (
  <div className="card-list">
    {cardList.map(({ onClick, viewComponent }) => (
      <ComponentViewCard rounded>
        {viewComponent}
      </ComponentViewCard>
    ))}
  </div>
);

export default CardList;
