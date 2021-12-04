import React, { ReactElement } from 'react';
import './component-view-card.css';

type ComponentViewCardProps = {
  children: ReactElement,
  rounded?: boolean,
}

const ComponentViewCard: React.VFC<ComponentViewCardProps> = ({
  children, rounded,
}) => {
  let classes = 'component-view-card ';
  classes += rounded ? 'component-view-card--rounded' : '';
  return (
    <div className={classes}>
      <div className="component-view-card--view-component">
        {children}
      </div>
    </div>
  );
};

export default ComponentViewCard;
