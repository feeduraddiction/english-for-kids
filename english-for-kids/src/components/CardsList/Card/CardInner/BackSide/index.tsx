import './index.scss'

const BackSide = (props:any) => {
    return <div className="card-back-side">
        <img src={require(`@assets/${props.imageToLearn}`)} alt="card image"/>
        <p>{props.translation}</p>
    </div>
}

export default BackSide;