import React, { useState } from 'react';
import Logo from '/Logo.png';
import "./Home.css";

function Home() {

    return (
        <div className='Home'>
            <div className="logo-zone">
                <img src={Logo} alt="Logo" id='logo-home'></img>
            </div>
            <div className='name-post-zone'>
                <h1 className="animate-back-in-left">JIBRIL RACHEDI</h1>
                <h2 className="animate-back-in-left">CONCEPTEUR DÉVELOPPEUR D'APPLICATIONS</h2>
            </div>
        </div>
    );

}

export default Home;
