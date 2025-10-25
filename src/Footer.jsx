import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'rgba(213, 204, 199, 0.86)', // semi-transparent
        color: 'black',
        textAlign: 'center',
        padding: '15px 0',
        backdropFilter: 'blur(8px)',
        marginTop: '50px',
      }}
    >
      <p>&copy; {new Date().getFullYear()} Restaurant Menu Manager. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
