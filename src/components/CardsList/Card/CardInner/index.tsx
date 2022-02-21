import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import classNames from "classnames";

import FrontSide from "./FrontSide";
import BackSide from "./BackSide";

import {selectSwitchMode} from "@store/Slices/SwitchModeSlice";
import {selectResults} from "@store/Slices/resultsSlice";

import { playAudio } from "@assets/functions";

import './index.scss';

const CardInner = (props: any) => {
    const isPlayingMode = useSelector(selectSwitchMode);
    const currentResults = useSelector(selectResults).filter(element => element.answer === 'correct')
        .map(element => element.item);

    const [isRotated, setIsRotated] = useState(false);

    const flipHandler = () => {
        setIsRotated(true);
    }

    const unflipHandler = () => {
        setIsRotated(false);
    }

    const cardInnerClasses = classNames({
        'card-inner': true,
        'rotated' : isRotated,
        'chosen' : currentResults.includes(props.audioSrc),
        'playingmode': isPlayingMode,
    });

    const playAudioHandler = () => {
        if (!isPlayingMode) {
            playAudio(props.audioSrc);
            // new Audio(require(`@assets/${props.audioSrc}`)).play();
        } else {
            props.onGetChosenCard(props.audioSrc);
        }
    }

    return (
        <div
            onClick={playAudioHandler}
            onMouseLeave={unflipHandler}
            className={cardInnerClasses}
            id={props.id}
        >
            <FrontSide
                imageToLearn={props.imageToLearn}
                word={props.word}
                onChangeSide={flipHandler}
                audioSrc={props.audioSrc}
            />
            <BackSide
                imageToLearn={props.imageToLearn}
                translation={props.translation}
            />
        </div>
    )
}

export default CardInner;