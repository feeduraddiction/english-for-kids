import CardInner from "./CardInner";

import './index.scss';

export interface categoryPropTypes {
    word: string,
    translation: string,
    image: string,
    audioSrc: string,
    onGetChosenCard: (card:string) => void,
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