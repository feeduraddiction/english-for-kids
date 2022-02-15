import { createSlice, configureStore } from '@reduxjs/toolkit';

interface switchModeState {
    isPlayingMode: boolean
}

type RootState = ReturnType<typeof store.getState>;

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

const store = configureStore({
    reducer: switchModeSlice.reducer,
});


export const switchModeAction = switchModeSlice.actions.switchMode;
export const selectSwitchMode = (state: RootState) => state.isPlayingMode;
export default store;


