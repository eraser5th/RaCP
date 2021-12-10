import React, { ReactElement } from 'react';
import {
  Routes, Route, Link,
} from 'react-router-dom';
import { Switch } from 'react-router';
import './cardList.css';
import ComponentViewCard from './ComponentViewCard';

type CardListProps = {
  cardList: {
    onClick?: string;
    viewComponent: ReactElement;
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
    <Switch>
      {cardList.map(({ onClick, viewComponent, path }) => (
        <Route path={path}>
          {viewComponent}
        </Route>
      ))}
    </Switch>
  </div>
);

export default CardList;
