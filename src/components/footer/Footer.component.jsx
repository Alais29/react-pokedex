import React from 'react';

const Footer = () => {
  return ( 
    <footer className="bg-danger text-center py-3 mt-5">
      <p className="text-white m-0">&copy; {new Date().getFullYear()} - Alfonsina Lizardo</p>
    </footer>
   );
}

export default Footer;