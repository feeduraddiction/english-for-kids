import Navigation from "@components/Header/BurgerMenu/Navigation";
import {categoriesPropTypes} from "../";


import './index.scss';
import {useDispatch} from "react-redux";
import {activateMenuAction} from "@store/Slices/activateMenuSlice";
import Button from "@UI/Button";

const BurgerMenu = ({categories}: categoriesPropTypes) => {
    const dispatch = useDispatch();

    const activateBurgerHandler = () => {
        dispatch(activateMenuAction());
        document.body.classList.add('scroll-lock');
    }

    return (
        <div className="burger-menu">
            <Button onClick={activateBurgerHandler}>&#9776;</Button>
            <Navigation
                categories={categories}
            />
        </div>
    )
};

export default BurgerMenu;