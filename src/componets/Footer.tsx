import React from 'react';
import './header.css';

type FooterProps = {
    links: string[]
}

const Footer: React.VFC<FooterProps> = ({
  links,
}) => (
  <footer className="footer">
    {links.map((link) => (<a href={link}>link</a>))}
    this is header
  </footer>
);

export default Footer;
