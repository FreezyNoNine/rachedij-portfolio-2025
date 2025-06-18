import React, { useState } from 'react';
import "./Education.css";

function Education() {

    return (
        <div className='Education'>

            <div className="aristideberges">
                <div className='aristidebergesimg-zone'>
                    <a href={`https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers`}><img src="/aristide_berges.jpg" alt="Aristide Bergès" /></a>
                </div>

                <div className='zone-title-aristideberges-diplome'>
                    <h1 className='title-aristideberges-diplome'>BTS SIO</h1>
                </div>

                <div className='zone-date-aristideberges'>
                    <h1 className='date-aristideberges'>2022-2024</h1>
                </div>
            </div>

            <div className="pabloneruda">
                <div className='pablonerudaimg-zone'>
                    <a href={`https://etudiant.lefigaro.fr/vos-etudes/etudes-secondaires/33902-bac-sti2d-option-sin-tout-savoir/`}><img src="/pablo_neruda.jpg" alt="Pablo Neruda" /></a>
                </div>

                <div className='zone-title-pabloneruda-diplome'>
                    <h1 className='title-pabloneruda-diplome'>Baccalauréat STI2D</h1>
                </div>

                <div className='zone-date-pabloneruda'>
                    <h1 className='date-pabloneruda'>2020-2022</h1>
                </div>
            </div>
        </div>
    );

}

export default Education;
