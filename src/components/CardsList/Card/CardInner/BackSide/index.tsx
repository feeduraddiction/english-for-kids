import './index.scss'

const BackSide = ({image, translation} : {image: string, translation: string}) => {
    return <div className="card-back-side">
        <img src={require(`@assets/${image}`)} alt="card image"/>
        <p>{translation}</p>
    </div>
}

export default BackSide;