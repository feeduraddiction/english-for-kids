import {useDispatch, useSelector} from "react-redux";
import {selectStartGame, startGameAction} from "@store/Slices/StartGameSlice";
import {refreshResultsAction} from "@store/Slices/resultsSlice";

import './index.scss';

export interface categoryPropsTypes {
    name: string
    image: string
}

const MenuCategory = ({name, image}: categoryPropsTypes) => {
    const dispatch = useDispatch();
    const isGameStarted = useSelector(selectStartGame);

    const resetStartGameHandler = () => {
        if (isGameStarted) {
            dispatch(refreshResultsAction());
            dispatch(startGameAction(false));
        }
    }

    return <div className="menu-category" onClick={resetStartGameHandler}>
        <img src={require(`@assets/${image}`)} alt="category"/>
        <h5>{name}</h5>
    </div>
}

export default MenuCategory;
