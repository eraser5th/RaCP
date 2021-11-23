import React from 'react';
import './button.css';

/**
 * Primary UI component for user interaction
 */
const Button: React.VFC<any> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button-primary' : 'storybook-button-secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button-${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {label}
      ahoy!!!!!
    </button>
  );
};

export default Button;
