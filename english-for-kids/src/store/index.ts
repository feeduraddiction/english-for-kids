import { configureStore} from "@reduxjs/toolkit";
import switchModeReducer from "./Slices/SwitchModeSlice";
import startGameReducer from "./Slices/StartGameSlice";
import addResultsReducer from "./Slices/resultsSlice"


const store = configureStore({
    reducer:{
        switchMode: switchModeReducer,
        startGame: startGameReducer,
        addResults: addResultsReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export default store;