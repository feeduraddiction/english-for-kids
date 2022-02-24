import {Route} from "react-router-dom";
import { useSelector} from "react-redux";
import {selectSwitchMode} from "@store/Slices/SwitchModeSlice";

import CardsList from "@components/CardsList";
import PlayModeNav from "@components/PlayModeNav";


import './index.scss';
import {pathToCategory} from "@assets/functions";
import {categoriesPropTypes} from "@assets/types";
import StatisticsPage from "./StatisticsPage";
import DifficultWordsPage from "./DifficultWordsPage";


const Pages = ({categories}: categoriesPropTypes) => {
    const isPlayingMode = useSelector(selectSwitchMode);
    return <section className="category-section">
        {categories.map(category => (
            <Route
                path={pathToCategory(category.name)}
                key={category.name}
                exact>
                <h1>{category.name}</h1>
                <CardsList info={category.info}/>
                {isPlayingMode && <PlayModeNav/>}
            </Route>
        ))}
        <StatisticsPage/>
        <DifficultWordsPage/>
    </section>
}

export default Pages;