import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../'


interface startGameState {
    isGameStarted: boolean
}

const initialState: startGameState = {
    isGameStarted: false
}

const startGameSlice = createSlice({
    name: 'startGame',
    initialState,
    reducers: {
        startGame(state){
            state.isGameStarted=!state.isGameStarted;
        }
    }
})

export const startGameAction = startGameSlice.actions.startGame;
export const selectStartGame = (state: RootState) => state.startGame.isGameStarted;

export default startGameSlice.reducer;