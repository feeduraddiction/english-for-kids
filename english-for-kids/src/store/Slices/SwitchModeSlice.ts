import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../'


interface switchModeState {
    isPlayingMode: boolean
}

const initialState: switchModeState = {
    isPlayingMode: false
}

const switchModeSlice = createSlice({
    name: 'switchMode',
    initialState,
    reducers: {
        switchMode(state){
            state.isPlayingMode=!state.isPlayingMode;
        }
    }
})

export const switchModeAction = switchModeSlice.actions.switchMode;
export const selectSwitchMode = (state: RootState) => state.switchMode.isPlayingMode;

export default switchModeSlice.reducer;





