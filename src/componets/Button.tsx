import React from 'react';
import '../css/button.css';

type ButtonProps = {
  text: string,
  size?: 'sm' | 'lg',
  onClick?: () => void,
  link?: string
}

const Button: React.VFC<ButtonProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  size = 'lg', text, onClick = () => {}, link = '#',
}) => (
  <button
    type="button"
    className={`btn btn-${size}`}
    ref={link}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
