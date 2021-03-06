import {NavLink} from "react-router-dom";
import {categoriesPropTypes} from "../../index"

import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {activateMenuAction, selectMenuActive} from "@store/Slices/activateMenuSlice";
import Button from "@UI/Button";
import MenuCategory from "@components/Header/BurgerMenu/Navigation/MenuCategory";
import {pathToCategory} from "@assets/functions";

const Navigation = ({categories}: categoriesPropTypes) => {
    const dispatch = useDispatch();
    const isBurgerActive = useSelector(selectMenuActive);

    const closeBurgerHandler = () => {
        dispatch(activateMenuAction());
        document.body.classList.remove('scroll-lock');
    }

    return (
        <nav className={isBurgerActive ? "navigation show-menu" : "navigation"}>
            <Button onClick={closeBurgerHandler}>&#9587;</Button>
            <ul>
                <li>
                    <NavLink to='/' exact={true} onClick={closeBurgerHandler}>
                        <MenuCategory
                            name={'Home'}
                            image={'img/home.png'}
                        />
                    </NavLink>
                </li>
                {categories.map((category) => (
                    <li key={category.name}>
                        <NavLink
                            onClick={closeBurgerHandler}
                            to={pathToCategory(category.name)}
                        >
                            <MenuCategory
                                name={category.name}
                                image={category.image}
                            />
                        </NavLink>
                    </li>
                ))}
                <li>
                    <NavLink to='/statistics'  onClick={closeBurgerHandler}>
                        <MenuCategory
                            name={'Statistics'}
                            image={'img/statistics.png'}
                        />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;