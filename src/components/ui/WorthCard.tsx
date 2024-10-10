import worth from '../../img/worth.jpg';
import { CategoriesItem } from '../../Interface/CategoriesItem';

function WorthCard({ data }: { data: CategoriesItem }) {
    const { name, image } = data; 
    return <div className="worth__item-wrapper">
        <img src={image} alt="worth" />
            <span className="worth__category">{name}</span>
    </div>
}

export { WorthCard }