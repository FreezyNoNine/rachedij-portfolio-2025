// components/flipcards/FlipCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function FlipCard({ frontImg, backImg, frontText, backText }) {
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
        <div className="flip-card-back no-img">
          <h1 className="back-text">{backText}</h1>
        </div>
      </motion.div>
    </div>
  );
}

export default FlipCard;
