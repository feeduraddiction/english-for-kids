import Results from "@components/PlayModeNav/Results";
import { useDispatch } from 'react-redux';

import { startGameAction } from '@store/Slices/StartGameSlice';

import './index.scss';

const PlayModeNav = () => {
    const dispatch = useDispatch();

    const startGameHandler = () => {
        dispatch(startGameAction());
    }

    return <div className="playmode-nav">
        <Results/>
        <button onClick={startGameHandler}>Start</button>
    </div>
}

export default PlayModeNav;