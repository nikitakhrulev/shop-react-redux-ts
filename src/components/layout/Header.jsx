import { Link } from 'react-router-dom';
import { useSelector, UseSelector } from 'react-redux';

import logo from '../../img/logo.svg';
import user from '../../img/user.svg';
import favorite from '../../img/favorite.svg';
import cart from '../../img/cart.svg';
import search from '../../img/search.svg';

function Header() {
    const cartAmount = useSelector(store => store.cart).length;
    
    return <header className="header">
        <div className="container">
            <div className="header__row">
                <Link to={'/'}>
                <img src={logo} alt="logo" />
                </Link>
                <div className="user-field">
                    <div className="user-field">
                        <img src={user} alt="user" />
                        <span className="username">User</span>
                    </div>
                </div>
                <div className="header__search">
                    <form className="form">
                        <img src={search} alt="search" />
                        <input type="text" placeholder='Search for anything...'/>
                    </form>
                </div>
                <div className="header__actions">
                    <img src={favorite} alt="favorite" />
                    <Link to={'/Cart'}>
                    <img src={cart} alt="cart" />
                    <div className="cart__amount">{cartAmount}</div>
                    </Link>
                </div>
            </div>
        </div>
    </header>
}

export { Header }