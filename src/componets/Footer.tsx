import React from 'react';
import './footer.css';

type FooterProps = {
    links: string[]
}

const Footer: React.VFC<FooterProps> = ({
  links,
}) => (
  <footer className="footer">
    {links.map((link) => (<a href={link}>link</a>))}
    this is footer
  </footer>
);

export default Footer;
