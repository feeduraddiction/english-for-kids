import React, {useState} from 'react';

import FrontSide from "./FrontSide";
import BackSide from "./BackSide";

import './index.scss';

const CardInner = (props: any) => {
    const [isRotated, setIsRotated] = useState(false);

    const flipHandler = () => {
        setIsRotated(true);

    }

    const unflipHandler = () => {
        setIsRotated(false);
    }

    const playAudioHandler = () => {
        new Audio(require(`@assets/${props.audioSrc}`)).play();
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