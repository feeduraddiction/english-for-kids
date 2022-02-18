import './index.scss';

export interface categoryPropsTypes {
    name: string
    image: string
}

const MenuCategory = ({name, image}: categoryPropsTypes) => {
    return <div className="menu-category">
        <img src={require(`@assets/${image}`)} alt=""/>
        <h5>{name}</h5>
    </div>
}

export default MenuCategory;