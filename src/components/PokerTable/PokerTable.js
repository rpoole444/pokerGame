// PokerTable.js
import React, { useState } from 'react';
import './PokerTable.css';
import Player from '../Player/Player';
import Card from '../Card/Card';

const PokerTable = ({ mockPlayers }) => {
    console.log(mockPlayers)
  const [currentPot, setCurrentPot] = useState(0);
  const [currentTurn, setCurrentTurn] = useState(0); // Assuming the player ID starts from 0
  const [players, setPlayers] = useState(mockPlayers || []);
  const [deck, setDeck] = useState(shuffleDeck());  
  const [communityCards, setCommunityCards] = useState([]);
//   const [burnCards, setBurnCards] = useState([]);
  const [dealStage, setDealStage] = useState(0)

  function createDeck() {
    const suits = ["HEARTS", "DIAMONDS", "CLUBS", "SPADES"];
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    return suits.flatMap(suit => values.map(value => ({ suit, value })));
  }

  function shuffleDeck() {
    const deck = createDeck();
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap
    }
    return deck;
  }

  function handleBet(playerId, amount) {
    // Add the bet amount to the pot
    setCurrentPot(prevPot => prevPot + amount);
    
    // Deduct the bet amount from the player's chip stack
    const updatedPlayers = players.map(player => {
        if (player.id === playerId) {
            return { ...player, chips: player.chips - amount };
        }
        return player;
    });
    
    // Move to the next player's turn
    setCurrentTurn((prevTurn) => (prevTurn + 1) % players.length);
}

function handleFold(playerId) {
    // Mark the player as folded
    const updatedPlayers = players.map(player => {
        if (player.id === playerId) {
            return { ...player, hasFolded: true };
        }
        return player;
    });
    
    // Move to the next player's turn
    setCurrentTurn((prevTurn) => (prevTurn + 1) % players.length);
}

function handleCheck() {
    // Just move to the next player's turn
    setCurrentTurn((prevTurn) => (prevTurn + 1) % players.length);
}




  function dealCards() {
    switch (dealStage) {
        case 0:  // Start of the game
            const shuffledDeck = shuffleDeck();
            setDeck(shuffledDeck);

            // Deal two cards to each player
            const updatedPlayers = players.map((player, index) => ({
                ...player,
                hand: [shuffledDeck[index * 2], shuffledDeck[index * 2 + 1]]
            }));
            setPlayers(updatedPlayers);
            setDealStage(1);
            break;

        case 1:  // Flop
            // Burn one card before dealing the flop
            const flopCards = [
                deck[players.length * 2 + 1],   // +1 because we burned a card
                deck[players.length * 2 + 2],
                deck[players.length * 2 + 3]
            ];
            setCommunityCards(flopCards);
            setDealStage(2);
            break;

        case 2:  // Turn
            // Burn one card before dealing the turn
            const turnCard = deck[players.length * 2 + 5];  // +5 to account for player cards and burned card
            setCommunityCards(prevCards => [...prevCards, turnCard]);
            setDealStage(3);
            break;

        case 3:  // River
            // Burn one card before dealing the river
            const riverCard = deck[players.length * 2 + 7];  // +7 to account for player cards, flop, and burned cards
            setCommunityCards(prevCards => [...prevCards, riverCard]);
            setDealStage(4);
            break;

        default:  // Reset
            setDealStage(0);
            setCommunityCards([]);
            setPlayers(players.map(player => ({
                ...player,
                hand: []
            })));
    }
}





    return (
        <div className="poker-table">
            {players && players.map(player => (
            <Player 
                key={player.id} 
                player={player} 
                id={player.id}
                onBet={handleBet} 
                onFold={handleFold} 
                onCheck={handleCheck}
                isCurrentTurn={players[currentTurn] && players[currentTurn].id === player.id}
            />
        ))}

        <div className="community-cards">
            {communityCards && communityCards.map((card, index) => (
                <Card key={index} suit={card.suit} value={card.value} />
            ))}
            <div className="current-pot">Pot: ${currentPot}</div>
        </div>
            <button onClick={dealCards} className="deal-flop-btn">
                {dealStage === 0 ? 'Deal Flop' : dealStage === 1 ? 'Deal Turn' : dealStage === 2 ? 'Deal River' : 'Reset Table'}
            </button>

            {/* More table components like community cards, dealer button, pot, etc. */}
        </div>
    );
}

export default PokerTable;
