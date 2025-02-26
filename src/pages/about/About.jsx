import React, { useState } from 'react';
import Avatar from '/avatar_about.png';
import "./About.css";

function About() {

    return (
        <div className='About'>
            <div className='avatar-zone'>
                <img src={Avatar} alt="Logo" id='logo-about'></img>
            </div>
            <div className='title-tiny-screen-zone'>
                <h1 className='title-tiny-screen'>Qui suis-je ?</h1>
            </div>
            <div className="pres-content-zone">
                <p className='desc-pres'>
                    Passionné par l'innovation numérique, je
                    combine <span id='gras'>créativité, compétences techniques
                    et vision stratégique</span> pour transformer les
                    idées en solutions concrètes et efficaces.
                    <br />
                    <br />
                    En optimisant des environnements complexes
                    et en pilotant des améliorations durables, je
                    contribue <span id='gras'>activement</span> au succès des projets
                    ambitieux. 
                    <br />
                    <br />
                    <span id='gras'>Polyvalent et orienté résultats,</span> je
                    réponds proactivement aux besoins et
                    dépasse les attentes.
                </p>
            </div>
        </div>
    );

}

export default About;
