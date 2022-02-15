import './index.scss';

export interface categoryCardPropTypes {
    name: string,
    image: string,
}

const CategoryCardContent = ({name, image}:categoryCardPropTypes) => {
    return <div className="category-card__content">
        <img src={require(`@assets/${image}`)} alt="category"/>
        <p>{name}</p>
    </div>
}
export default CategoryCardContent;