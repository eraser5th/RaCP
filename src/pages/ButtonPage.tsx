import React from 'react';
import Button from '../componets/Button';
import CodeBlock from '../componets/CodeBlock';
import Heading from '../componets/Heading';
import './buttonPage.css';

const reactCode = `
import React from 'react';
import './button.css';

type ButtonProps = {
  label: string,
  theme?: 'primary' | 'light' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark',
  size?: 'sm' | 'md' | 'lg',
  rounded?: boolean,
  withArrow?: boolean,
  onClick?: () => void,
}

const Button: React.VFC<ButtonProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  size = 'md', label, onClick = () => {}, theme = 'primary', rounded = false, withArrow = false,
}) => {
  let classes = 'btn ';
  classes += \`btn--\${size} \`;
  classes += \`btn--\${theme} \`;
  classes += rounded ? 'btn--rounded ' : '';
  classes += withArrow ? 'btn--arrow-right ' : '';
  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

`;

const CSSCode = `
@import url("./theme");

.btn {
  display: inline-block;
  min-width: min(100%, 240px);
  max-width: 100%;
  height: auto;
  min-height: 3.75rem;
  padding: 10px;
  font-size: 1.125rem;
  color: var(--theme-light);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  background-color: var(--theme-primary);
  border: 4px solid transparent;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  transition: 0.25s;
}

.btn--md {
  font-size: 1.125rem;
}

.btn--lg {
  min-width: min(100%, 300px);
  min-height: 4.5rem;
  font-size: 1.375rem;
}

.btn--sm {
  min-width: min(100%, 200px);
  min-height: 3rem;
  font-size: 0.875rem;
}

.btn--rounded {
  border-radius: 10px;
}

.btn--arrow-right {
  position: relative;
  padding-right: 2em;
  padding-left: 1.38em;
}

.btn--arrow-right::after {
  position: absolute;
  top: 50%;
  right: 0.83em;
  font-weight: 900;
  content: "\\2794";
  transform: translateY(-50%);
}

.btn:hover {
  color: var(--theme-primary);
  background-color: var(--theme-light);
  border: 2px solid var(--theme-primary);
}

.btn--light {
  color: var(--theme-primary);
  background-color: var(--theme-light);
}

.btn--light:hover {
  color: var(--theme-light);
  background-color: var(--theme-primary);
}

.btn--secondary {
  color: var(--theme-light);
  background-color: var(--theme-secondary);
}

.btn--secondary:hover {
  color: var(--theme-secondary);
  background-color: var(--theme-light);
  border: 2px solid var(--theme-secondary);
}

.btn--success {
  color: var(--theme-light);
  background-color: var(--theme-success);
}

.btn--success:hover {
  color: var(--theme-success);
  background-color: var(--theme-light);
  border: 2px solid var(--theme-success);
}

.btn--danger {
  color: var(--theme-light);
  background-color: var(--theme-danger);
}

.btn--danger:hover {
  color: var(--theme-danger);
  background-color: var(--theme-light);
  border: 2px solid var(--theme-danger);
}

.btn--warning {
  color: var(--theme-light);
  background-color: var(--theme-warning);
}

.btn--warning:hover {
  color: var(--theme-warning);
  background-color: var(--theme-light);
  border: 2px solid var(--theme-warning);
}

.btn--info {
  color: var(--theme-light);
  background-color: var(--theme-info);
}

.btn--info:hover {
  color: var(--theme-info);
  background-color: var(--theme-light);
  border: 2px solid var(--theme-info);
}

.btn--dark {
  color: var(--theme-light);
  background-color: var(--theme-dark);
}

.btn--dark:hover {
  color: var(--theme-dark);
  background-color: var(--theme-light);
  border: 2px solid var(--theme-dark);
}
`;

const { react: ReactCodeBlock, CSS: CSSCodeBlock } = CodeBlock;

const PrimaryButtonPage: React.VFC = () => (
  <div>
    <Heading text="Button Component" level={2} />
    <div className="view-vomponent">
      <Button label="Primary" theme="primary" size="md" rounded />
    </div>
    <div className="code-block">
      <Heading text="React Code" level={3} />
      <ReactCodeBlock code={reactCode} />
    </div>
    <div className="code-block">
      <Heading text="CSS Code" level={3} />
      <CSSCodeBlock code={CSSCode} />
    </div>
  </div>
);

export default PrimaryButtonPage;
