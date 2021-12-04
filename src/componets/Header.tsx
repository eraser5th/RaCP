import React from 'react';
import './header.css';

type HeaderProps = {
    links: string[]
}

const Header: React.VFC<HeaderProps> = ({
  links,
}) => (
  <header className="header">
    <nav className="header--nav">
      {links.map((link) => (<a href={link}>link</a>))}
    </nav>
  </header>
);

export default Header;
