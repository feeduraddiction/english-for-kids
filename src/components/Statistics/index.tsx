import StatisticsTable from "@components/Statistics/StatisticsTable";
import StatisticsButtons from "@components/Statistics/StatisticsButtons";

import './index.scss';

const Statistics = () => {
    return <div className="statistics">
        <StatisticsTable/>
        <StatisticsButtons/>
    </div>
}

export default Statistics;