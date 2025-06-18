// pages/Experiences.jsx
import React from 'react';
import './Experiences.css';
import FlipCard from '../../components/flipcards/Flipcard.jsx';
import SoitecLogo from '/logo_soitec.jpg';
import RHCLogo from '/rhc_logo.png';

function Experiences() {
    return (
        <div className="Experiences">
            <div className="flipcard-base">
                <div className="card-1">
                    <FlipCard
                        frontImg={SoitecLogo}
                        backText="Stage - 2023"
                    />
                    <section class="wrapper wcard-1">
                        <div class="top">Soitec</div>
                        <div class="bottom" aria-hidden="true">Soitec</div>
                    </section>
                </div>
                <div className="card-2">
                    <FlipCard
                        frontImg={RHCLogo}
                        backText="Stage - 2024"
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
