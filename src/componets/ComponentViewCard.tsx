import React, { ReactElement } from 'react';
import './component-view-card.css';

type ComponentViewCardProps = {
  child: ReactElement,
  rounded?: boolean,
}

const ComponentViewCard: React.VFC<ComponentViewCardProps> = ({
  child, rounded,
}) => (
  <div className="component-view-card">
    <div className="component-view-card--view-component">
      {child}
    </div>
  </div>
);

export default ComponentViewCard;
