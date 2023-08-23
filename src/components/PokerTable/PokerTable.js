// PokerTable.js
import React from 'react';
import './PokerTable.css';
import Player from '../Player/Player';

const PokerTable = ({ players }) => {
    return (
        <div className="poker-table">
            {players.map(player => (
                <Player key={player.id} player={player} />
            ))}
            {/* More table components like community cards, dealer button, pot, etc. */}
        </div>
    );
}

export default PokerTable;
