import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import FrontSide from "./FrontSide";
import BackSide from "./BackSide";

import { selectSwitchMode } from "@store/Slices/SwitchModeSlice";


import './index.scss';

const CardInner = (props: any) => {
    const isPlayingMode = useSelector(selectSwitchMode);


    const [isRotated, setIsRotated] = useState(false);

    const flipHandler = () => {
        setIsRotated(true);
    }

    const unflipHandler = () => {
        setIsRotated(false);
    }

    const playAudioHandler = () => {
         if(!isPlayingMode){
             new Audio(require(`@assets/${props.audioSrc}`)).play();
         }
         else {
             props.onGetChosenCard(props.audioSrc);
         }
    }

    return (
        <div
            onClick={playAudioHandler}
            onMouseLeave={unflipHandler}
            className={!isRotated ? "card-inner" : "card-inner rotated"}
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