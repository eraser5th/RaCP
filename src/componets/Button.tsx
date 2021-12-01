import React from 'react';
import './button.css';

type ButtonProps = {
  label: string,
  size?: 'sm' | 'lg',
  onClick?: () => void,
}

const Button: React.VFC<ButtonProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  size = 'lg', label, onClick = () => {},
}) => (
  <button
    type="button"
    className={`btn btn-${size}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
