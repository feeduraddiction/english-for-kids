import CardsList from "@components/CardsList";
import {useDispatch, useSelector} from "react-redux";
import {selectTappedItems} from "@store/Slices/itemsCountersSlice";
import {Route} from "react-router-dom";
import React from "react";

import Categories from "@assets/Categories";
import {selectSwitchMode} from "@store/Slices/SwitchModeSlice";
import PlayModeNav from "@components/PlayModeNav";
import {activateDifficultAction} from "@store/Slices/activateDifficultSlice";


const DifficultWordsPage = () => {
    const dispatch = useDispatch();
    const tappedWords = useSelector(selectTappedItems);
    const isPlayingMode = useSelector(selectSwitchMode);
    const difficultWords = tappedWords.filter(item => item.correct - item.incorrect < 0)
        .sort((a,b) => b.incorrect - a.incorrect).map(item => item.word);

    const wordsToDisplay = Categories.map(category => category.info)
        .flat()
        .filter(item => {
        return difficultWords.includes(item.word);
    })

    if (wordsToDisplay.length > 1) {
        dispatch(activateDifficultAction(true));
    } else dispatch(activateDifficultAction(false));

    return <Route path='/difficult-words'>
        <CardsList info={wordsToDisplay}/>
        {isPlayingMode && <PlayModeNav/>}
    </Route>
}

export default React.memo(DifficultWordsPage);