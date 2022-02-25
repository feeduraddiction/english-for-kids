import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../index";

interface endGameState {
    isDifficultActive: boolean
}

const initialState = {
    isDifficultActive: false,
} as endGameState;

const activateDifficultSlice = createSlice({
    name: 'activateMenu',
    initialState,
    reducers: {
        activateDifficult(state, action: PayloadAction<boolean>){
            state.isDifficultActive = action.payload;
        }
    }
})

export const activateDifficultAction = activateDifficultSlice.actions.activateDifficult;
export const selectDifficultActive = (state: RootState) => state.activateDifficult.isDifficultActive;
export default activateDifficultSlice.reducer;