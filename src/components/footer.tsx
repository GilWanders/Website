import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <span>© {new Date().getFullYear()} &middot; Built by</span>
      <a href="https://www.github.com/eloquia">Eloquia</a>
    </footer>
  )
}

export default Footer;
