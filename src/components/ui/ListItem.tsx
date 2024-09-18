import item from '../../img/item.png';

function ListItem() {
    return <div className="list__item-wrapper">
        <img src={item} alt="item" />
        <div className="list__item-content">
            <h3 className="item__name">Nike ZoomX 2023</h3>
            <span className="item__category">Sneakers</span>
            <div className="item__info">
                <div className="item__price">
                    <p className="item__price-now">99$</p>
                    <p className="item__price-before">79$</p>
                </div>
                <div className="item__purchased">
                    <p>19 people purchased</p>
                </div>
            </div>
        </div>
    </div>
}

export { ListItem }