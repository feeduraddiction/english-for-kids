import './index.scss';
import CategoryCardContent from "@components/Categories/CategoryCard/CategoryCardContent";
import {useSelector} from "react-redux";
import {selectSwitchMode} from "@store/Slices/SwitchModeSlice";

export interface categoryCardPropTypes {
    name: string,
    image: string,
}



const CategoryCard = ({name, image}: categoryCardPropTypes) => {
    const isPlayingMode = useSelector(selectSwitchMode);

    return <div className={isPlayingMode ? "category-card" : " category-card playing-mode__category"}>
        <CategoryCardContent name={name} image={image}/>
    </div>
}
export default CategoryCard;