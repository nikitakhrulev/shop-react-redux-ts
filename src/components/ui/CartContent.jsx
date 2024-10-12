import { useSelector } from 'react-redux';

import product from '../../img/product.jpg';
import plus from '../../img/cart-plus.svg';
import minus from '../../img/cart-minus.svg';
import del from '../../img/delete.svg';

function CartContent() {
    const cartItems = useSelector(store => store.cart);
    console.log(cartItems)
    
    return <div className="cart__wrapper">
        <div className="cart__content">
            <p class="cart__heading">Your cart</p>
            <div className="cart__main">
                <ul className="cart__list">
                {
                    cartItems.map((item) => (
                    <li className="cart__item" key={item.id}>
                        <div className="cart__item-content">
                            <div className="cart__item-first">
                             <div className="cart__item-img">
                                <img src={item.mainImg} alt="img" />
                             </div>
                             <div className="cart__item-data">
                                <p className="cart__item-name">{item.title}</p>
                                <p className="cart__item-cat">{item.categoryName}</p>
                             </div>
                            </div>
                             <div className="cart__item-center">
                             <div className="cart__item-price">
                                <p>{item.price}$</p>
                             </div>
                             <div className="cart__item-controls">
                                <div className="cart__item-minus cart__control">
                                    <img src={minus} alt="minus" />
                                </div>
                                <div className="cart__item-amount">1</div>
                                <div className="cart__item-plus cart__control">
                                    <img src={plus} alt="plus" />
                                </div>
                             </div>
                             </div>
                             <div className="cart__item-end">
                                <div className="cart__item-final">
                                    <p>99$</p>
                                </div>
                                <div className="cart__item-del">
                                    <img src={del} alt="delete" />
                                </div>
                             </div>
                        </div>
                    </li>
                    ))
                }
                </ul>
                <div className="cart__info">
                    <div className="cart__price">
                        <p>TOTAL PRICE: <span>198$</span></p>
                    </div>
                    <div className="cart__btn">
                        <button>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export { CartContent }