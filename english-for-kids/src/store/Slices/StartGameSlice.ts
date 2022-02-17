import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../'


interface startGameState {
    isGameStarted: boolean
    repeatCard: number
}

const initialState: startGameState = {
    isGameStarted: false,
    repeatCard: 0
}

const startGameSlice = createSlice({
    name: 'startGame',
    initialState,
    reducers: {
        startGame(state, action: PayloadAction<boolean>){
            state.isGameStarted= action.payload;
        },
        repeatCard(state) {
            state.repeatCard = state.repeatCard + 1;
        }

    },

})

export const startGameAction = startGameSlice.actions.startGame;
export const repeatCardAction = startGameSlice.actions.repeatCard;
export const selectStartGame = (state: RootState) => state.startGame.isGameStarted;
export const selectRepeatCard = (state: RootState) => state.startGame.repeatCard;

export default startGameSlice.reducer;