import { configureStore} from "@reduxjs/toolkit";
import switchModeReducer from "./Slices/SwitchModeSlice";
import startGameReducer from "./Slices/StartGameSlice";
import addResultsReducer from "./Slices/resultsSlice";
import endGameReducer from "./Slices/endgameSlice";
import activateMenuReducer from "./Slices/activateMenuSlice";
import tapCounterReducer from "./Slices/itemsCountersSlice";
import activateDifficultReducer from './Slices/activateDifficultSlice'

const store = configureStore({
    reducer:{
        switchMode: switchModeReducer,
        startGame: startGameReducer,
        addResults: addResultsReducer,
        endGame: endGameReducer,
        activateMenu: activateMenuReducer,
        itemsCounter: tapCounterReducer,
        activateDifficult: activateDifficultReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export default store;