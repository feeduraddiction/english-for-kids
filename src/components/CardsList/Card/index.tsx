import CardInner from "./CardInner";

import './index.scss';
import {infoType} from "@assets/types";


export interface categoryPropTypes extends infoType {
    onGetChosenCard: (card:string) => void;
}


const Card = ({
                  word,
                  translation,
                  image,
                  audioSrc,
                  onGetChosenCard
              }: categoryPropTypes) => {
    return (
        <div className="card">
            <CardInner
                image={image}
                word={word}
                translation={translation}
                audioSrc={audioSrc}
                onGetChosenCard={onGetChosenCard}
            />
        </div>
    )


}

export default Card;