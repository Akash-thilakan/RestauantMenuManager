import React from 'react';

function About() {
  return (
    <section
      id="about"
      style={{
        maxWidth: '800px',
        margin: '50px auto',
        backgroundColor: 'rgba(213, 204, 199, 0.86)',
        backdropFilter: 'blur(10px)',
        padding: '40px',
        borderRadius: '15px',
        color: 'black',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      }}
    >
      <h2 className='text-dark'>About Our Restaurant</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.6', color:'black' }}>
        Welcome to our Restaurant Menu Manager! Here you can explore delicious meals, both veg and non-veg, with
        real-time updates. Our goal is to make menu management seamless and visually appealing for users and
        restaurant staff alike.
      </p>
    </section>
  );
}

export default About;
