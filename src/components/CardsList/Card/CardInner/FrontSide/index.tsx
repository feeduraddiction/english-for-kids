import './index.scss'
import { useSelector } from 'react-redux';
import { selectSwitchMode } from "@store/Slices/SwitchModeSlice";

export interface frontSidePropTypes {
    image: string,
    word: string,
    onChangeSide: () => void,
}

const FrontSide = ({image,word,onChangeSide}:frontSidePropTypes) => {
    const isPlayingMode = useSelector(selectSwitchMode);

    return <div className="card-front-side">
        <img src={require(`@assets/${image}`)} alt="card image"/>
        {!isPlayingMode && <p>{word}</p>}
        {!isPlayingMode && <button onClick={onChangeSide}>⟳</button>}
    </div>
}

export default FrontSide;