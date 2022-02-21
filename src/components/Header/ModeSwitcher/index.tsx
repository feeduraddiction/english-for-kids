import {useDispatch, useSelector} from "react-redux";
import {selectSwitchMode, switchModeAction} from "@store/Slices/SwitchModeSlice";
import {refreshResultsAction} from "@store/Slices/resultsSlice";
import {selectStartGame, startGameAction} from "@store/Slices/StartGameSlice";
import './index.scss';

const ModeSwitcher = () => {
    const dispatch = useDispatch();
    const isPlayingMode = useSelector(selectSwitchMode);
    const isGameStarted = useSelector(selectStartGame);

    const switchModeHandler = () => {
        dispatch(switchModeAction());
        if (isGameStarted) {
            dispatch(refreshResultsAction());
            dispatch(startGameAction(false));
        }

    }

    return <div
        className={
            isPlayingMode ? "mode-switcher" :
                "mode-switcher active-switcher"
        }
    >
        <h5>{isPlayingMode ? "Play" : "Train"}</h5>
        <input type="checkbox" id="mode-switcher__input" onClick={switchModeHandler}></input>
        <label htmlFor="mode-switcher__input"></label>
    </div>
}

export default ModeSwitcher;