import React from 'react';
import '../css/button.css';

type ButtonProps = {
  size: 'sm' | 'lg',
  text: string
}

const Button: React.VFC<ButtonProps> = ({ size = 'lg', text }) => (
  <button type="button" className={`btn-${size}`}>{text}</button>
);

export default Button;
