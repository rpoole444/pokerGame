import React from "react";
import Card from "../Card/Card";
import "./Player.css"

const Player = ({ player }) => {
  return (
    <div className="player">
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
      
      {/* Placeholder for future action buttons */}
      <div className="player-actions">
        {/* ActionButtons component will go here */}
      </div>
    </div>
  )
}

export default Player;
