import React from 'react';
import './App.css';
import Card from '../Card/Card';  // Assuming CardComponent.js is in the same directory
import Player from '../Player/Player';
import user1 from '/Users/reidpoole/poker/react-poker/src/assets/user-1.jpg'
import user2 from '/Users/reidpoole/poker/react-poker/src/assets/user-2.webp'
import user3 from '/Users/reidpoole/poker/react-poker/src/assets/user-3.JPG'
import user4 from '/Users/reidpoole/poker/react-poker/src/assets/user-4.JPEG'
import user5 from '/Users/reidpoole/poker/react-poker/src/assets/user-5.jpeg'
import user6 from '/Users/reidpoole/poker/react-poker/src/assets/user-6.jpeg'


const mockPlayers = [
  { id: 1, name: "Player 1", chips: 1000, avatar: user1 },
  { id: 2, name: "Player 2", chips: 1000, avatar: user2 },
  { id: 3, name: "Player 3", chips: 1000, avatar: user3 },
  { id: 4, name: "Player 4", chips: 1000, avatar: user4 },
  { id: 5, name: "Player 5", chips: 1000, avatar: user5 },
  { id: 6, name: "Player 6", chips: 1000, avatar: user6 },
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Poker with Reid Poole!
        </p>
      </header>
        <div className="Card-section">
          {/* Sample usage of Card component */}
          <Card suit="HEARTS" value="A" />
          <Card suit="CLUBS" value="10" />
        </div>
        <div className='Players-section'>
    {mockPlayers.map(player => {
        console.log(player);  // logging player here
        return <Player key={player.id} player={player} />;  // explicitly returning the component
    })}
</div>
    </div>
  );
}

export default App;
