// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>Made by Harsh Gajera</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'black',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  text: {
    color:'white', // You can replace '#333' with the color of your choice
  },
};

export default Footer;
