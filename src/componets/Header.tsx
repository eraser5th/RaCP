import React from 'react';
import './header.css';

type HeaderProps = {
    links: string[]
}

const Header: React.VFC<HeaderProps> = ({
  links,
}) => (
  <header className="header">
    {links.map((link) => (<a href={link}>link</a>))}
    this is header
  </header>
);

export default Header;
