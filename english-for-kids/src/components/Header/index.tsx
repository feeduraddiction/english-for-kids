import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { switchModeAction } from '../../store/store';

import './index.css'

export interface categoriesPropTypes {
    categories: {
        name: string,
        image: string,
    }[]
}


const Header = ({categories}: categoriesPropTypes) => {
    const dispatch = useDispatch();

    const switchModeHandler = () => {
        dispatch(switchModeAction());
    }

    return (
        <header>
            <nav>
                <ul>
                    {categories.map((category) => (
                        <li>
                            <NavLink to={`/${category.name.toLocaleLowerCase()}`}>{category.name}</NavLink>
                        </li>
                    ))}
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                </ul>
            </nav>
            <button onClick={switchModeHandler}>PlayMode</button>
        </header>)
}

export default Header;