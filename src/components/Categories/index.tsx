import {Link, Route, useHistory} from 'react-router-dom';
import CategoryCard from "@components/Categories/CategoryCard";

import './index.scss';

export interface categoriesPropTypes {
    categories: {
        name: string,
        image: string,
    }[]
}

const Categories = ({categories}: categoriesPropTypes) => {
    const history = useHistory();
    
    const pathToCategory = (
        category: {
            name: string,
            image: string
        }) => {
        return `/english-for-kids/${category.name
            .toLowerCase()
            .replace(/\s+/g, '')}`
    }

    return (
        <Route path='/english-for-kids' exact>
            <div className="categories">
                {categories.map((category) => (
                    <Link
                        onClick={() => history.push(pathToCategory(category))}
                        key={category.name}
                        to={pathToCategory(category)}>
                        <CategoryCard name={category.name} image={category.image}/>
                    </Link>
                ))}
            </div>
        </Route>
    )


}

export default Categories;