import React from 'react';
import logo from '/Users/reidpoole/poker/react-poker/src/logo.svg';
import './App.css';
import Card from '../Card/Card';  // Assuming CardComponent.js is in the same directory

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Poker with React!
        </p>

        <div className="Card-section">
          {/* Sample usage of Card component */}
          <Card suit="HEARTS" value="A" />
          <Card suit="CLUBS" value="10" />
        </div>
      </header>
    </div>
  );
}

export default App;
