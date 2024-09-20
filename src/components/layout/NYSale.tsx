import santa from '../../img/sale/sale-santa.jpg';
import sneaker from '../../img/sale/sale-sneaker.png';
import console from '../../img/sale/sale-console.png';

function NYSale() {
    return <div className="sale">
        <div className="container">
            <div className="sale__content">
                <div className="content__items">
                    <div className="text">
                        <p>NEW YEAR</p>
                        <span>SALE</span>
                    </div>
                    <div className="sale__btn">
                        <button>See more</button>
                    </div>
                    <div className="content__sneaker">
                        <img src={sneaker} alt="sneaker" />
                    </div>
                    <div className="content__console">
                        <img src={console} alt="console" />
                    </div>
                </div>
                <div className="santa__img">
                    <img src={santa} alt="santa-img" />
                    <div className="santa__text">
                        <p>save up to <span>50%</span> off</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export { NYSale }