import Results from "@components/PlayModeNav/Results";
import { useDispatch, useSelector } from 'react-redux';

import { startGameAction, repeatCardAction, selectStartGame } from '@store/Slices/StartGameSlice';


import './index.scss';
import Button from "@UI/Button";

const PlayModeNav = () => {
    const dispatch = useDispatch();
    const isGameStarted = useSelector(selectStartGame);

    const startGameHandler = () => {
        dispatch(startGameAction(true));
        if(isGameStarted) {
            dispatch(repeatCardAction());
        }
    }

    return <div className="playmode-nav">
        <Results/>
        <Button onClick={startGameHandler}>{!isGameStarted ? 'Start' : 'Replay'}</Button>
    </div>
}

export default PlayModeNav;