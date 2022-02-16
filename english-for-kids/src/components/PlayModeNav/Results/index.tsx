import {useSelector} from "react-redux";
import {selectResults} from "@store/Slices/resultsSlice";

import './index.scss';

const Results = () => {
    const results = useSelector(selectResults);

    return <div className="results">
        {results.map((result) => (
            <img src={require(`@assets/${result.image}`)} alt="result"/>
        ))}
    </div>
}

export default Results;