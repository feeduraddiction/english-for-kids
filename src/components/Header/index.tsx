import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {selectSwitchMode, switchModeAction} from '@store/Slices/SwitchModeSlice';
import {refreshResultsAction} from "@store/Slices/resultsSlice";


import BurgerMenu from "@components/Header/BurgerMenu";

import './index.scss'
import Button from "@UI/Button";
import {selectStartGame} from "@store/Slices/StartGameSlice";

export interface categoriesPropTypes {
    categories: {
        name: string,
        image: string,
    }[]
}



const Header = ({categories}: categoriesPropTypes) => {
    const dispatch = useDispatch();
    const isPlayingMode = useSelector(selectSwitchMode);
    const isGameStarted = useSelector(selectStartGame);

    const switchModeHandler = () => {
        dispatch(switchModeAction());
        if (isGameStarted){
            dispatch(refreshResultsAction());
        }

    }

    return (
        <header className="header">
            <BurgerMenu categories={categories}/>
            <Button onClick={switchModeHandler}>{isPlayingMode? 'Train':'Play'}</Button>
        </header>
    )
}

export default Header;