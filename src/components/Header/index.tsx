import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {selectSwitchMode, switchModeAction} from '@store/Slices/SwitchModeSlice';

import BurgerMenu from "@components/Header/BurgerMenu";

import './index.scss'
import Button from "@UI/Button";

export interface categoriesPropTypes {
    categories: {
        name: string,
        image: string,
    }[]
}



const Header = ({categories}: categoriesPropTypes) => {
    const dispatch = useDispatch();
    const isPlayingMode = useSelector(selectSwitchMode);

    const switchModeHandler = () => {
        dispatch(switchModeAction());
    }

    return (
        <header className="header">
            <BurgerMenu categories={categories}/>
            <Button onClick={switchModeHandler}>{isPlayingMode? 'Train':'Play'}</Button>
        </header>
    )
}

export default Header;