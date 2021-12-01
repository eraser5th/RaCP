import React from 'react';
import './button.css';

type ButtonProps = {
  label: string,
  size?: 'sm' | 'lg',
  onClick?: () => void,
  link?: string
}

const Button: React.VFC<ButtonProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  size = 'lg', label, onClick = () => {}, link = '#',
}) => (
  <button
    type="button"
    className={`btn btn-${size}`}
    ref={link}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
