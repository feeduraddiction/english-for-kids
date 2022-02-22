import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import classNames from "classnames";

import FrontSide from "./FrontSide";
import BackSide from "./BackSide";

import {selectSwitchMode} from "@store/Slices/SwitchModeSlice";
import {selectResults} from "@store/Slices/resultsSlice";

import {playAudio} from "@assets/functions";

import './index.scss';

import {categoryPropTypes} from "@components/CardsList/Card";
import {tapCounterAction} from "@store/Slices/itemsCountersSlice";

const CardInner = ({
                       word,
                       translation,
                       image,
                       audioSrc,
                       onGetChosenCard
                   }: categoryPropTypes) => {
    const isPlayingMode = useSelector(selectSwitchMode);
    const currentResults = useSelector(selectResults)
        .filter(element => element.result === 'correct')
        .map(element => element.item);

    const dispatch = useDispatch();
    const [isRotated, setIsRotated] = useState(false);

    const flipHandler = () => {
        setIsRotated(true);
    }

    const unflipHandler = () => {
        setIsRotated(false);
    }

    const cardInnerClasses = classNames({
        'card-inner': true,
        'rotated': isRotated,
        'chosen': currentResults.includes(audioSrc),
        'playingmode': isPlayingMode,
    });

    const playAudioHandler = () => {
        dispatch(tapCounterAction(word));
        if (!isPlayingMode) {
            playAudio(audioSrc);
        } else {
            onGetChosenCard(audioSrc);
        }

    }

    return (
        <div
            onClick={playAudioHandler}
            onMouseLeave={unflipHandler}
            className={cardInnerClasses}
        >
            <FrontSide
                image={image}
                word={word}
                onChangeSide={flipHandler}
            />
            <BackSide
                image={image}
                translation={translation}
            />
        </div>
    )
}

export default CardInner;