import CardsList from "@components/CardsList";
import {useSelector} from "react-redux";
import {selectTappedItems} from "@store/Slices/itemsCountersSlice";
import {Route} from "react-router-dom";
import React from "react";

import Categories from "@assets/Categories";
import {selectSwitchMode} from "@store/Slices/SwitchModeSlice";
import PlayModeNav from "@components/PlayModeNav";


const DifficultWordsPage = () => {
    console.log('render of difficultWords');
    const tappedWords = useSelector(selectTappedItems);
    const isPlayingMode = useSelector(selectSwitchMode);
    const difficultWords = tappedWords.filter(item => item.correct - item.incorrect < 0)
        .sort((a,b) => b.incorrect - a.incorrect).map(item => item.word);

    const wordsToDisplay = Categories.map(category => category.info).flat().filter(item => {
        return difficultWords.includes(item.word);
    })

    return <Route path='/difficult-words'>
        <CardsList info={wordsToDisplay}/>
        {isPlayingMode && <PlayModeNav/>}
    </Route>
}

export default React.memo(DifficultWordsPage);