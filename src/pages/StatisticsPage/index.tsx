import {Route} from "react-router-dom";
import StatisticsTable from "@components/StatisticsTable";

const StatisticsPage = () => {
    return <Route path={'/statistics'} exact>
        <StatisticsTable/>
    </Route>
}

export default StatisticsPage;