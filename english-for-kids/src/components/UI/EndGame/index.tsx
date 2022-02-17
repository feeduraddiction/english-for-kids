import {useSelector} from "react-redux";

import {selectResults} from "@store/Slices/resultsSlice";

import playAudio from "@assets/functions/playAudio";

import './index.scss';


const EndGame = () => {
    const results = useSelector(selectResults);

    const correctQuantity = results.map((result) => result.answer)
        .reduce((prev, cur) => {
            return cur === 'incorrect' ? prev + 1 : prev
        }, 0)

    correctQuantity ?
        playAudio('sounds/fail.mp3') :
        playAudio('sounds/won.mp3');

    return <div className="endgame">
        <img
            src={require(`@assets/img/${
                correctQuantity ? 'sad_bunny.png' : 'happy_bunny.png'
            }`)}
            alt="result"
        />
        <h1>{correctQuantity ? `failed answers: ${correctQuantity}` : 'all ok'}</h1>
    </div>
}

export default EndGame;