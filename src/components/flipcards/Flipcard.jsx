// components/flipcards/FlipCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function FlipCard({ frontImg, backImg, backText }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flip-card" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="flip-card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="flip-card-front"
          style={{ backgroundImage: `url(${frontImg})` }}
        >
        </div>
        <div className="flip-card-back"
          style={{ backgroundImage: `url(${backImg})` }}>
          <h1 className="back-text" style={{ margin: `2vw` }}>{backText}</h1>
        </div>
      </motion.div>
    </div>
  );
}

export default FlipCard;
