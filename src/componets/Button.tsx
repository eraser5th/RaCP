import React from 'react';
import './button.css';

type ButtonProps = {
  label: string,
  theme: 'primary' | 'light' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark',
  size?: 'sm' | 'md' | 'lg',
  onClick?: () => void,
}

const Button: React.VFC<ButtonProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  size = 'md', label, onClick = () => {}, theme = 'primary',
}) => (
  <button
    type="button"
    className={`btn btn--${size} btn--${theme}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
