import React, { useState } from 'react';
import "./Contact.css";
import CarteDeVisite from '/carte_de_visite.png'

function Contact() {

    return (
        <div className='Contact'>
            <img src={CarteDeVisite} alt="CDV" id='img-cdv' />
        </div>
    );

}

export default Contact;
