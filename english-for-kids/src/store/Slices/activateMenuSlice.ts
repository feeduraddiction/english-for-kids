import {createSlice} from "@reduxjs/toolkit";
import { RootState } from "../index";

interface endGameState {
    isMenuActive: boolean
}

const initialState = {
    isMenuActive: false,
} as endGameState;

const activateMenuSlice = createSlice({
    name: 'activateMenu',
    initialState,
    reducers: {
        activateMenu(state){
            state.isMenuActive = !state.isMenuActive;
        }
    }
})

export const activateMenuAction = activateMenuSlice.actions.activateMenu;
export const selectMenuActive = (state: RootState) => state.activateMenu.isMenuActive;
export default activateMenuSlice.reducer;