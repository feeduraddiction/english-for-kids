import Card from "@components/CardsList/Card";

import './index.scss';

export interface cardPropTypes {
    info: {
        word: string,
        translation: string,
        image: string,
        audioSrc: string,
    }[]
}


const CardsList = ({info}: cardPropTypes) => {
    return <div className="cards-list">
        {
            info.map((card) => (
                <Card
                    imageToLearn={card.image}
                    word={card.word}
                    translation={card.translation}
                    audioSrc={card.audioSrc}
                />
            ))
        }
    </div>


}

export default CardsList;