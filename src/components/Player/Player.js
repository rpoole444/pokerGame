import React from "react";
import { useState } from 'react';
import Card from "../Card/Card";
import "./Player.css"


const Player = ({ player, onBet, onFold, onCheck, isCurrentTurn }) => {
  const [betAmount, setBetAmount] = useState(0);
  
  const handleBet = (amount) => {
    onBet(player.id, amount);
  };

    const handleFold = () => {
    onFold(player.id);
  };

  const handleCheck = () => {
    onCheck();
  };

   return (
    <div className={`player ${isCurrentTurn ? "active-turn" : ""}`}>
      <div className="player-avatar">
        <img src={player.avatar} alt={`${player.name}'s avatar`} />
      </div>

      <div className="player-name">
        {player.name}
      </div>
      
      <div className="player-cards">
        {player.hand && player.hand.map((card, index) => (
          <Card key={index} suit={card.suit} value={card.value} />
        ))}
      </div>
      
      <div className="player-chips">
        Chips: {player.chips}
      </div>
      
      {isCurrentTurn && (
        <div className="player-actions">
          {/* ActionButtons component will go here */}
          <input 
            type="number" 
            value={betAmount} 
            onChange={(e) => setBetAmount(e.target.value)} 
            placeholder="Bet Amount" 
          />
          <button onClick={() => handleBet(betAmount)}>Bet 10</button> {/* This is just an example; you might want to allow the user to specify an amount */}
          <button onClick={handleFold}>Fold</button>
          <button onClick={handleCheck}>Check</button>
        </div>
      )}
    </div>
  )
}

export default Player;
