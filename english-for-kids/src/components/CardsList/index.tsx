import Card from "@components/CardsList/Card";

import './index.scss';
import {useSelector} from "react-redux";
import {selectStartGame} from "@store/Slices/StartGameSlice";
import {useEffect, useState} from "react";

import {useDispatch} from "react-redux";

import {resultsImageAction} from "@store/Slices/resultsSlice";


export interface cardPropTypes {
    info: {
        word: string,
        translation: string,
        image: string,
        audioSrc: string,
    }[]
}


const CardsList = ({info}: cardPropTypes) => {
    const dispatch = useDispatch();

    const isGameStarted = useSelector(selectStartGame);
    const audioToPlay = info.map((category) => category.audioSrc);

    const [chosenCard, setChosenCard] = useState('');
    const [audio, setAudio] = useState(audioToPlay);


    const getChosenCard = (card: string) => {
        setChosenCard(card);
    }

    useEffect(() => {
        if (isGameStarted) {
            setTimeout(() => playAudio(audio[0]), 500);
        }
    }, [isGameStarted, audio])


    useEffect(() => {
        if (!!chosenCard) {
            if (chosenCard === audio[0]) {
                setAudio(audio.slice(1));
                setChosenCard('');
                dispatch(resultsImageAction('img/right_answer.png'));
            } else {
                playAudio(audio[0]);
                setChosenCard('');
                dispatch(resultsImageAction('img/false_answer.png'));
            }
        }
    }, [chosenCard])

    function playAudio(src: string) {
        new Audio(require(`@assets/${src}`)).play();
    }

    return <div className="cards-list">
        {
            info.map((card) => (
                <Card
                    imageToLearn={card.image}
                    word={card.word}
                    translation={card.translation}
                    audioSrc={card.audioSrc}
                    onGetChosenCard={getChosenCard}
                />
            ))
        }
    </div>


}

export default CardsList;