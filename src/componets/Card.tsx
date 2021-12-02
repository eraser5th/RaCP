import React from 'react';
import './card.css';

type CardProps = {
  image?: string,
  explain?: string,
  title?: string,
  rounded?: boolean,
  onClick?: () => void,
}

const Card: React.VFC<CardProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  image, title, explain, onClick = () => {}, rounded = false,
}) => {
  let classes = 'card ';
  classes += rounded ? 'card--rounded' : '';
  return (
    <div className={classes}>
      {image ? <img src={image} alt={title} className="card--image" /> : ''}
      {title ? <h1 className="card--title">{title}</h1> : ''}
      {explain ? <p className="card--explain">{explain}</p> : ''}
    </div>
  );
};

export default Card;
