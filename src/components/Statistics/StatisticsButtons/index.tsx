import Button from "@UI/Button";

import "./index.scss";
import {useDispatch} from "react-redux";
import {resetCounterAction} from "@store/Slices/itemsCountersSlice";
import {NavLink} from "react-router-dom";

const StatisticsButtons = () => {
    const dispatch = useDispatch();

    const resetHandler = () => {
        dispatch(resetCounterAction());
    }

    return <div className="statistics-buttons">
        <Button onClick={resetHandler}>Reset all</Button>
       <NavLink to='/difficult-words'><Button>Repeat difficult</Button></NavLink>
    </div>
}

export default StatisticsButtons;