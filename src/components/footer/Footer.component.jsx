import React from 'react';

import './Footer.styles.scss'

const Footer = () => {
  return ( 
    <footer className="bg-danger text-center py-3">
      <p className="text-white m-0">&copy; {new Date().getFullYear()} - Alfonsina Lizardo</p>
    </footer>
   );
}

export default Footer;