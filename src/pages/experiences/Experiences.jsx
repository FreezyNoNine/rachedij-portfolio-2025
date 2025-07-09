// pages/Experiences.jsx
import React from 'react';
import './Experiences.css';
import FlipCard from '../../components/flipcards/Flipcard.jsx';
import SoitecLogo from '/logo_soitec.jpg';
import RHCLogo from '/rhc_logo.png';
import IllustrationExcel from '/illustration-excel-blur.png';
import IllustrationRHC from '/royal_hair_blur.png';

function Experiences() {
    return (
        <div className="Experiences">
            <div className="flipcard-base">
                <div className="card-1">
                    <FlipCard
                        frontImg={SoitecLogo}
                        backImg={IllustrationExcel}
                        backText="Ajout de MVC pour contrôler l'import excel sur le logiciel de gestion de planning"
                    />
                    <section class="wrapper wcard-1">
                        <div class="top">Soitec</div>
                        <div class="bottom" aria-hidden="true">Soitec</div>
                    </section>
                </div>
                <div className="card-2">
                    <FlipCard
                        frontImg={RHCLogo}
                        backImg={IllustrationRHC}
                        backText="Création d'une charte graphique et d'un site web complet en HTML/CSS"
                    />
                    <section class="wrapper wcard-2">
                        <div class="top">Royal Hair Coiffure</div>
                        <div class="bottom" aria-hidden="true">Royal Hair Coiffure</div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
