import './index.scss';
import CategoryCardContent from "@components/Categories/CategoryCard/CategoryCardContent";

export interface categoryCardPropTypes {
    name: string,
    image: string,
}

const CategoryCard = ({name, image}: categoryCardPropTypes) => {
    return <div className="category-card">
        <CategoryCardContent name={name} image={image}/>
    </div>
}
export default CategoryCard;