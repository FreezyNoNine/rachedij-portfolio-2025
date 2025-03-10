import React from 'react';
import Logo from '/Logo.png';
import './Home.css';

function Home() {
  return (
    <div className='Home'>
      <div className='circle-zone'>
        <div className="snowflakes" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, index) => (
            <div className="snowflake" key={index}>
              <div className="inner">❅</div>
            </div>
          ))}
        </div>
        <img src={Logo} alt="Logo" id='logo-home' />
      </div>
      <div className='name-post-zone'>
        <h1 className="animate-back-in-left">JIBRIL RACHEDI</h1>
        <h2 className="animate-back-in-left">CONCEPTEUR DÉVELOPPEUR D'APPLICATIONS</h2>
      </div>
    </div>
  );
}

export default Home;
