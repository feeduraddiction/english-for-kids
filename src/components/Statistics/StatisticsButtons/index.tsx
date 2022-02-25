import Button from "@UI/Button";

import "./index.scss";
import {useDispatch, useSelector} from "react-redux";
import {resetCounterAction} from "@store/Slices/itemsCountersSlice";
import {NavLink} from "react-router-dom";
import {selectDifficultActive} from "@store/Slices/activateDifficultSlice";

const StatisticsButtons = () => {
    const isDifficultActive = useSelector(selectDifficultActive);
    const dispatch = useDispatch();

    const resetHandler = () => {
        dispatch(resetCounterAction());
    }


    return <div className="statistics-buttons">
        <Button onClick={resetHandler}>Reset all</Button>
        {isDifficultActive && <NavLink to='/difficult-words'><Button>Repeat difficult</Button></NavLink>}
    </div>
}

export default StatisticsButtons;