import {useSelector, useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";

import {selectEndgame, endgameAction} from "@store/Slices/endgameSlice";
import {switchModeAction} from "@store/Slices/SwitchModeSlice";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Pages from "./pages";
import EndGame from "@UI/EndGame";
import Backdrop from "@UI/Backdrop";

import categories from '@assets/Categories';

import './App.css';
import {refreshResultsAction} from "@store/Slices/resultsSlice";
import {selectMenuActive} from "@store/Slices/activateMenuSlice";

function App() {
    const isGameEnded = useSelector(selectEndgame);
    const isBurgerActive = useSelector(selectMenuActive);

    const dispatch = useDispatch();
    if (isGameEnded) {

        setTimeout(() => {
            dispatch(endgameAction(false));
            dispatch(refreshResultsAction());  //end of the game
        }, 3000);
    }

    return (
        <div className="App">
            {isBurgerActive && <Backdrop/>}
            <Header categories={categories}/>
            {isGameEnded ?
                <>
                    <Redirect to='/'/>
                    <EndGame/>
                </>
                :
                <>
                    <Categories categories={categories}/>
                    <Pages categories={categories}/>
                </>
            }
        </div>
    );
}

export default App;