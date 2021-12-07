import React, { ReactElement } from 'react';
import './component-view-card.css';

type ComponentViewCardProps = {
  children: ReactElement,
  rounded?: boolean,
  row?: 1 | 2 | 3 | 4;
  col?: 1 | 2 | 3 | 4;
}

const ComponentViewCard: React.VFC<ComponentViewCardProps> = ({
  children, rounded, row = 1, col = 1,
}) => {
  let classes = 'component-view-card ';
  classes += rounded ? 'component-view-card--rounded ' : '';
  classes += `component-view-card--row-${row} component-view-card--col-${col} `;
  return (
    <div className={classes}>
      <div className="component-view-card--view-component">
        {children}
      </div>
    </div>
  );
};

export default ComponentViewCard;
