// PokerTable.js
import React, { useState } from 'react';
import './PokerTable.css';
import Player from '../Player/Player';
import Card from '../Card/Card';

const PokerTable = ({ players }) => {
  const [communityCards, setCommunityCards] = useState([]);
  const [burnCards, setBurnCards] = useState([]);
  const [dealStage, setDealStage] = useState(0)

  function dealCards() {
    switch (dealStage) {
        case 0:
            setCommunityCards([
                { suit: "HEARTS", value: "3" },
                { suit: "CLUBS", value: "J" },
                { suit: "SPADES", value: "9" }
            ]);
            setDealStage(1);
            break;
        case 1:
            setCommunityCards(prevCards => [...prevCards, { suit: "DIAMONDS", value: "7" }]);
            setDealStage(2);
            break;
        case 2:
            setCommunityCards(prevCards => [...prevCards, { suit: "HEARTS", value: "Q" }]);
            setDealStage(3);
            break;
        default:
      if (dealStage === 3) {
          setDealStage(0);
          setCommunityCards([]);
      }
            console.log("All cards have been dealt.");
    }
}




    return (
        <div className="poker-table">
            {players.map(player => (
                <Player key={player.id} player={player} />
            ))}
        <div className="community-cards">
            {communityCards.map((card, index) => (
              <Card key={index} suit={card.suit} value={card.value} />
             ))}
        </div>
<button onClick={dealCards} className="deal-flop-btn">
    {dealStage === 0 ? 'Deal Flop' : dealStage === 1 ? 'Deal Turn' : dealStage === 2 ? 'Deal River' : 'Reset Table'}
</button>
            {/* More table components like community cards, dealer button, pot, etc. */}
        </div>
    );
}

export default PokerTable;
