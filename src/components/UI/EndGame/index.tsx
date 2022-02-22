import {useSelector} from "react-redux";

import {selectResults} from "@store/Slices/resultsSlice";

import {playAudio} from "@assets/functions";

import './index.scss';


const EndGame = () => {
    const results = useSelector(selectResults);

    const incorrectQuantity = results.map((result) => result.result)
        .reduce((prev, cur) => {
            return cur === 'incorrect' ? prev + 1 : prev
        }, 0)

    playAudio(incorrectQuantity ?
        'sounds/fail.mp3' :
        'sounds/won.mp3'
    );

    return <div className="endgame">
        <img
            src={require(`@assets/img/${
                incorrectQuantity ?
                    'sad_bunny.png' :
                    'happy_bunny.png'
            }`)}
            alt="result"
        />
        <h1>
            {
                incorrectQuantity ?
                    ` Ooops! You failed ${incorrectQuantity} word(s) :( ` :
                    'Good Job!'
            }
        </h1>
    </div>
}

export default EndGame;