import React from 'react';
import './App.css';
import Card from '../Card/Card';  // Assuming CardComponent.js is in the same directory
import Player from '../Player/Player';
import PokerTable from '../PokerTable/PokerTable';
import user1 from '../assets/user-1.jpg';
import user2 from '../assets/user-2.webp';
import user3 from '../assets/user-3.JPG';
import user4 from '../assets/user-4.JPEG';
import user5 from '../assets/user-5.jpeg';
import user6 from '../assets/user-6.jpeg';


const mockPlayers = [
  { id: 1, name: "Player 1", chips: 1000, avatar: user1, hand: [], hasFolded: false },
  { id: 2, name: "Player 2", chips: 1000, avatar: user2, hand: [], hasFolded: false },
  { id: 3, name: "Player 3", chips: 1000, avatar: user3, hand: [], hasFolded: false },
  { id: 4, name: "Player 4", chips: 1000, avatar: user4, hand: [], hasFolded: false },
  { id: 5, name: "Player 5", chips: 1000, avatar: user5, hand: [], hasFolded: false },
  { id: 6, name: "Player 6", chips: 1000, avatar: user6, hand: [], hasFolded: false },
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Poker with Reid "Country Blues" Poole!
        </p>
      </header>
      <PokerTable mockPlayers={mockPlayers} />
    </div>
  );
}


export default App;
