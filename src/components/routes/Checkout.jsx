import logo from '../../img/logo.svg';

function Checkout() {
    <div className="checkout__wrapper">
        <div className="checkout__info">
            <div className="checkout__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="checkout__content">
                <div className="checkout__heading">
                    <p>Order summary</p>
                </div>
                <ul className="checkout__list">
                    <li className="checkout__item"></li>
                </ul>
                <div className="checkout__total">
                    <p>Total bill</p>
                    <p>$80/-</p>
                </div>
            </div>
        </div>
        <div className="checkout__form-wrapper">
            <div className="checkout__form-heading">
                <p>Complete your order</p>
            </div>
        </div>
    </div>
}