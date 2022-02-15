import { Route } from "react-router-dom";
import CardsList from "@components/CardsList";

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
    return <section className="category-section">
        {categories.map(category => (
            <Route path={`/${category.name.toLocaleLowerCase().replace(/\s+/g, '')}`} exact>
                {category.name}
                <CardsList info={category.info} />
            </Route>
        ))}
    </section>
}

export default Pages;