import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import Card from "@components/CardsList/Card";

import {addResultsAction} from "@store/Slices/resultsSlice";
import {selectStartGame, selectRepeatCard} from "@store/Slices/StartGameSlice";
import {endgameAction} from "@store/Slices/endgameSlice";
import {selectEndgame} from "@store/Slices/endgameSlice";
import './index.scss';

import {playAudio} from "@assets/functions";
import {correctItemAction, incorrectItemAction} from "@store/Slices/itemsCountersSlice";

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
    const repeatCard = useSelector(selectRepeatCard);
    const isGameEnded = useSelector(selectEndgame);

    const audioToPlay = info.map((category) => category.audioSrc)
        .sort((a, b) => 0.5 - Math.random()); //a new random array

     const [chosenCard, setChosenCard] = useState('');
    const [audio, setAudio] = useState(audioToPlay);

    const getChosenCard = (card: string) => {
        setChosenCard(card);
        if (audio.length === 1) {
            setAudio(audioToPlay);
            dispatch(addResultsAction({item: card, result:'correct'}));
            dispatch(endgameAction(true));
            dispatch(correctItemAction(card));
        }
    }

    useEffect(() => {
        if (isGameStarted || repeatCard > 0) {
            setTimeout(() => playAudio(audio[0]), 500);
        }
    }, [isGameStarted, repeatCard, audio]); //play audio if game was started or repeat button pushed


    useEffect(() => {
        if (!!chosenCard && isGameStarted) {
            if (chosenCard === audio[0]) {
                dispatch(addResultsAction({item: chosenCard, result:'correct'}));
                dispatch(correctItemAction(chosenCard));
                setAudio(audio.slice(1));
                setChosenCard('');
            } else {
                playAudio('sounds/failure.mp3');
                setChosenCard('');
                dispatch(addResultsAction({item: chosenCard, result:'incorrect'}));
                dispatch(incorrectItemAction(chosenCard));
            }
        }
    }, [chosenCard, isGameEnded]); //set new array of sounds after right answer or play failure.mp3

    return <div className="cards-list">
        {
            info.map((card) => (
                <Card
                    image={card.image}
                    word={card.word}
                    translation={card.translation}
                    audioSrc={card.audioSrc}
                    onGetChosenCard={getChosenCard}
                    key={card.word}
                />
            ))
        }
    </div>
}

export default CardsList;