import { configureStore} from "@reduxjs/toolkit";
import switchModeReducer from "./Slices/SwitchModeSlice";
import startGameReducer from "./Slices/StartGameSlice";
import addResultsReducer from "./Slices/resultsSlice";
import endGameReducer from "./Slices/endgameSlice";
import addGeneralResultsReducer from "./Slices/generalResultsSlice";
import activateMenuReducer from "./Slices/activateMenuSlice";
import tapCounterReducer from "./Slices/itemsCountersSlice";


const store = configureStore({
    reducer:{
        switchMode: switchModeReducer,
        startGame: startGameReducer,
        addResults: addResultsReducer,
        endGame: endGameReducer,
        addGeneralResults: addGeneralResultsReducer,
        activateMenu: activateMenuReducer,
        tapCounter: tapCounterReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export default store;