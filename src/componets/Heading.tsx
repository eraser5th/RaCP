import React from 'react';
import './heading.css';

type HeadingProps = {
    text: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading: React.FC<HeadingProps> = ({ text, level }) => {
  if (level === 1) return <h1 className="level1-heading"><span className="level1-heading__inner">{text}</span></h1>;
  if (level === 2) return <h2 className="level2-heading"><span className="level2-heading__inner">{text}</span></h2>;
  if (level === 3) return <h3 className="level3-heading"><span className="level3-heading__inner">{text}</span></h3>;
  if (level === 4) return <h4 className="level4-heading"><span className="level4-heading__inner">{text}</span></h4>;
  if (level === 5) return <h5 className="level5-heading"><span className="level5-heading__inner">{text}</span></h5>;
  return <h6 className="level6-heading"><span className="level6-heading__inner">{text}</span></h6>;
};

export default Heading;
