import React from "react";
import { useState } from 'react';
import Card from "../Card/Card";
import "./Player.css"

const Player = ({ player, onBet, onFold, onCheck, isCurrentTurn, currentBet, isSmallBlind, isBigBlind }) => {
    const [betAmount, setBetAmount] = useState(0);

    const playerBet = player.bet || 0;
   const canBet = currentBet === 0 && playerBet === 0;
  const canCheck = currentBet === 0 || currentBet === playerBet;
  const canRaise = currentBet > playerBet; 
  const canCall = currentBet > playerBet && playerBet !== 0;


    const requiredCallAmount = currentBet - playerBet;

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
        <div className={`player ${isCurrentTurn ? "active-turn" : ""} ${player.hasFolded ? "player-folded" : ""}`}>
            <div className="player-avatar">
                <img src={player.avatar} alt={`${player.name}'s avatar`} />
            </div>

            <div className="player-name">
                {player.name} 
                {isSmallBlind && <span className="blind-tag">Small Blind</span>}
                {isBigBlind && <span className="blind-tag">Big Blind</span>}
                {player.hasFolded && <span className="folded-tag">Folded</span>}
            </div>

            <div className="player-cards">
                {player.hand && player.hand.map((card, index) => (
                    <Card key={index} suit={card.suit} value={card.value} />
                ))}
            </div>

            <div className="player-chips">
                Chips: {player.chips}
            </div>

            {isCurrentTurn && !player.hasFolded ? (
                <div className="player-actions">
                    <input 
                        type="number" 
                        value={betAmount} 
                        onChange={(e) => setBetAmount(parseFloat(e.target.value))} 
                        placeholder="Amount" 
                    />
                    {canBet && <button onClick={() => handleBet(betAmount)}>Bet</button>}
                    {canCheck && <button onClick={handleCheck}>Check</button>}
                    {canCall && <button onClick={() => handleBet(requiredCallAmount)}>Call</button>}
                    {canRaise && !canBet && <button onClick={() => handleBet(requiredCallAmount + betAmount)}>Raise</button>}
                    <button onClick={handleFold}>Fold</button>
                </div>
            ) : null}
        </div>
    );
}

export default Player;
