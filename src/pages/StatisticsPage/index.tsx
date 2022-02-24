import {Route} from "react-router-dom";
import Statistics from "@components/Statistics";

const StatisticsPage = () => {
    return <Route path={'/statistics'} exact>
        <Statistics/>
    </Route>
}

export default StatisticsPage;