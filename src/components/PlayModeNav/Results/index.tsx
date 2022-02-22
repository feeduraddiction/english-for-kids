import {useSelector} from "react-redux";
import {selectResults} from "@store/Slices/resultsSlice";

import './index.scss';

const Results = () => {
    const results = useSelector(selectResults);
    const newResults = [...results];

    if (newResults.length > 8) {
        for (let i = 0; i < results.length - 8; i++) {
            newResults.shift();
        }
    }

    return <div className="results">
        {newResults.map((result) => (
            <img
                key={Math.random().toString()}
                src={
                    require(
                        `@assets/img/${result.result === 'correct' ?
                            'right_answer.png' :
                            'false_answer.png'}`
                    )}
                alt="result"
            />
        ))
        }
    </div>
}

export default Results;