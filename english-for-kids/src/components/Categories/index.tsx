import {Link, Route} from 'react-router-dom';
import CategoryCard from "@components/Categories/CategoryCard";

import './index.scss';

export interface categoriesPropTypes {
    categories: {
        name: string,
        image: string,
    }[]
}

const Categories = ({categories}: categoriesPropTypes) => {
    return (
        <Route path='/' exact>
            <div className="categories">
                {categories.map((category) => (
                    <Link key={category.name} to={`/${category.name.toLowerCase().replace(/\s+/g, '')}`}>
                        <CategoryCard name={category.name} image={category.image}/>
                    </Link>
                ))}
            </div>
        </Route>
    )


}

export default Categories;