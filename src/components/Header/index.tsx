import React from "react";

import BurgerMenu from "@components/Header/BurgerMenu";
import ModeSwitcher from "@components/Header/ModeSwitcher";

import './index.scss'

export interface categoriesPropTypes {
    categories: {
        name: string,
        image: string,
    }[]
}

const Header = ({categories}: categoriesPropTypes) => {

    return (
        <header className="header">
            <BurgerMenu categories={categories}/>
            <ModeSwitcher/>
        </header>
    )
}

export default Header;