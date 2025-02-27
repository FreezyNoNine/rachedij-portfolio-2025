import React, { useState } from 'react';
import "./Projets.css";
import { cards } from "./previewData.json";

function Projets() {

    const [index, setIndex] = useState(0);

    const mod = (n, m) => {
        let result = n % m;
        return result >= 0 ? result : result + m;
    };

    const handleClick = (id) => {
        const newIndex = cards.findIndex((card) => card.id === id);
        if (newIndex !== -1) {
            setIndex(newIndex);
        }
    };

    return (
        <div className="Projets">

            <div className="carousel">
                {cards.map((item, i) => {
                    const indexLeft = mod(index - 1, cards.length);
                    const indexRight = mod(index + 1, cards.length);

                    let className = "card";

                    if (i === index) {
                        className = "card card--active";
                    } else if (i === indexRight) {
                        className = "card card--right";
                    } else if (i === indexLeft) {
                        className = "card card--left";
                    }

                    return (
                        <a href={item.href} key={item.id}>
                            <img className={className} src={item.image} alt="carousel item" />
                        </a>
                    );
                })}
            </div>

            <div className='Barres'>
                <div className="barre barre-assistant" onClick={() => handleClick("1")}>
                    <span className='title-assistant'>ASSISTANT DES SIO</span>
                </div>
                <div className="barre barre-royalhair" onClick={() => handleClick("2")}>
                    <span className='title-royal'>ROYAL HAIR COIFFURE</span>
                </div>
                <div className="barre barre-tetris" onClick={() => handleClick("3")}>
                    <span className='title-tetris'>TETRIS</span>
                </div>
            </div>

        </div>
    );
}

export default Projets;
