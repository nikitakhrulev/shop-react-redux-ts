import item from '../../img/item.png';
import { CardItem } from '../../Interface/TrendingItem';

function ListItem({ data }: { data: CardItem }) {
    const { title, price, images, category: {name}} = data;
    return <div className="list__item-wrapper">
        <img src={images[0]} alt="item" />
        <div className="list__item-content">
            <h3 className="item__name">{title}</h3>
            <span className="item__category">{name}</span>
            <div className="item__info">
                <div className="item__price">
                    <p className="item__price-now">{price - 20}$</p>
                    <p className="item__price-before">{price}$</p>
                </div>
                <div className="item__purchased">
                    <p>19 people purchased</p>
                </div>
            </div>
        </div>
    </div>
}

export { ListItem }