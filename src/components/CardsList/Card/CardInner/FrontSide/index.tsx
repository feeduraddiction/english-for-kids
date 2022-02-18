import './index.scss'
import { useSelector } from 'react-redux';
import { selectSwitchMode } from "@store/Slices/SwitchModeSlice";

const FrontSide = (props: any) => {
    const isPlayingMode = useSelector(selectSwitchMode);

    return <div className="card-front-side">
        <img src={require(`@assets/${props.imageToLearn}`)} alt="card image"/>
        {!isPlayingMode && <p>{props.word}</p>}
        {!isPlayingMode && <button onClick={props.onChangeSide}>⟳</button>}
    </div>
}

export default FrontSide;