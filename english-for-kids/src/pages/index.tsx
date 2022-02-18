import {Route} from "react-router-dom";
import { useSelector} from "react-redux";
import {selectSwitchMode} from "@store/Slices/SwitchModeSlice";

import CardsList from "@components/CardsList";
import PlayModeNav from "@components/PlayModeNav";


import './index.scss';


export interface categoriesPropTypes {
    categories: {
        name: string,
        info: {
            word: string,
            translation: string,
            image: string,
            audioSrc: string,
        }[]
    }[]
}

const Pages = ({categories}: categoriesPropTypes) => {
    const isPlayingMode = useSelector(selectSwitchMode);
    return <section className="category-section">
        {categories.map(category => (
            <Route
                path={`/${category.name
                    .toLocaleLowerCase()
                    .replace(/\s+/g, '')}`}
                key={category.name}
                exact>
                <h1>{category.name}</h1>
                <CardsList info={category.info}/>
                {isPlayingMode && <PlayModeNav/>}
            </Route>
        ))}
    </section>
}

export default Pages;