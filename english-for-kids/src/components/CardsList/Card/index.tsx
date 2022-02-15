import React from 'react';

import './index.scss';
import CardInner from "./CardInner";

const Card = (props: any) => {
    return <div className="card">
        <CardInner id={props.id}
                   imageToLearn={props.imageToLearn}
                   word={props.word}
                   translation={props.translation}
                   audioSrc={props.audioSrc}
        />
    </div>


}

export default Card;