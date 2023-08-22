import React from 'react';
import './Card.css';

const suits = {
  HEARTS: '♥',
  DIAMONDS: '♦',
  CLUBS: '♣',
  SPADES: '♠'
};

const Card = ({ suit, value }) => {
  const cardColor = (suit === 'HEARTS' || suit === 'DIAMONDS') ? 'red' : 'black';

  return (
    <div className={`card ${cardColor}`}>
      <span className="top-left">{value} {suits[suit]}</span>
      <span className="bottom-right">{value} {suits[suit]}</span>
    </div>
  );
}

export default Card;
