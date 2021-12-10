import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { readFileSync } from 'fs';
import './cardList.css';
import ComponentViewCard from './ComponentViewCard';

console.log(readFileSync);

type CardListProps = {
  cardList: {
    onClick?: string;
    viewComponent: ReactElement;
    codeViewPage: ReactElement;
    path: string,
  }[]
}

const CardList: React.VFC<CardListProps> = ({ cardList }) => (
  <div className="card-list">
    {cardList.map(({ onClick, viewComponent, path }) => (
      <Link to={path}>
        <ComponentViewCard rounded>
          {viewComponent}
        </ComponentViewCard>
      </Link>
    ))}
  </div>
);

export default CardList;
