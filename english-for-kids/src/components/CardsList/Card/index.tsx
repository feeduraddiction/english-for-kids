import CardInner from "./CardInner";

import './index.scss';

const Card = (props: any) => {
    return <div className="card">
        <CardInner id={props.id}
                   imageToLearn={props.imageToLearn}
                   word={props.word}
                   translation={props.translation}
                   audioSrc={props.audioSrc}
                   onGetChosenCard={props.onGetChosenCard}
        />
    </div>


}

export default Card;