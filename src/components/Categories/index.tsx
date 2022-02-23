import {Link, Route} from 'react-router-dom';
import CategoryCard from "@components/Categories/CategoryCard";

import './index.scss';
import {pathToCategory} from "@assets/functions";
import {categoriesPropTypes} from "@assets/types";



const Categories = ({categories}: categoriesPropTypes) => {

    return (
        <Route path='/' exact>
            <div className="categories">
                {categories.map((category) => (
                    <Link
                        key={category.name}
                        to={pathToCategory(category.name)}>
                        <CategoryCard name={category.name} image={category.image}/>
                    </Link>
                ))}
            </div>
        </Route>
    )


}

export default Categories;