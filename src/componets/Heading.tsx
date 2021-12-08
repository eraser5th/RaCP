import React from 'react';

type HeadingProps = {
    text: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading: React.FC<HeadingProps> = ({ text, level }) => {
  if (level === 1) return <h1 className="level1-heading">{text}</h1>;
  if (level === 2) return <h2 className="level2-heading">{text}</h2>;
  if (level === 3) return <h3 className="level3-heading">{text}</h3>;
  if (level === 4) return <h4 className="level4-heading">{text}</h4>;
  if (level === 5) return <h5 className="level5-heading">{text}</h5>;
  return <h6 className="level6-heading">{text}</h6>;
};

export default Heading;
