import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../index";

interface endGameState {
    isGameEnded: boolean
}

const initialState = {
    isGameEnded: false,
} as endGameState;

const endGameSlice = createSlice({
    name: 'endgame',
    initialState,
    reducers: {
        endGame(state, action: PayloadAction<boolean>){
            state.isGameEnded = action.payload;
        }
    }
})

export const endgameAction = endGameSlice.actions.endGame;
export const selectEndgame = (state: RootState) => state.endGame.isGameEnded;
export default endGameSlice.reducer;