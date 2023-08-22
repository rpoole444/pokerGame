import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentHand: [],
  players: [
    {
      id:1,
      name: 'Reid Poole',
      cards:[],
      chips: 1000
    }
  ],
  potAmount: 0,
  
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCurrentHand: (state, action) => {
      state.currentHand = action.payload;
    },
    addPlayer: (state, action) => {
      state.players.push(action.payload);
    },
    removePlayer: (state, action) => {
      state.players = state.players.filter(player => player.id !== action.payload.id);
    },
    setPotAmount: (state, action) => {
      state.potAmount = action.payload;
    },
    addToPot: (state, action) => {
      state.potAmount += action.payload;
    },
    resetPot: (state) => {
      state.potAmount = 0;
    }
    // ... other reducers
  }
});

export const { setCurrentHand, addPlayer, removePlayer, setPotAmount, addToPot, resetPot } = gameSlice.actions;
export default gameSlice.reducer;
