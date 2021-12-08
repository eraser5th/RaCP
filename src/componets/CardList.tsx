import React, { ReactElement } from 'react';
import Button from './Button';
import './cardList.css';
import ComponentViewCard from './ComponentViewCard';

type CardListProps = {
  cardList: {
    onClick?: string,
    viewComponent: ReactElement,
    row?: 1 | 2 | 3 | 4,
    col?: 1 | 2 | 3 | 4,
  }[]
}
const CardList: React.VFC<CardListProps> = ({ cardList }) => (
  <div className="card-list">
    {cardList.map(({
      onClick, viewComponent, row, col,
    }) => (
      <ComponentViewCard rounded row={row} col={col}>
        {viewComponent}
      </ComponentViewCard>
    ))}
  </div>
);

export default CardList;
