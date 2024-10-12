import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import productImg from '../../img/product.jpg';
import productThumb from '../../img/product-thumbnail.jpg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cart-actions';

function ProductInfo() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const productId = Number(id);
    
    const product = useSelector(state => state.trending.find((item) => item.id === productId));
    if (!product) {
        return <p>item not found</p>
    }
    console.log(product)
    const { title, images, price, description, category: {name: categoryName}} = product;
    const mainImg = images[0]; 
    console.log(categoryName)
    const addItemToCart = () => {
        const itemObj = {
            id, title, mainImg, price, categoryName
        }
        console.log(itemObj)
        dispatch(addToCart(itemObj))
    }

    const chooseSize = (evt) => {
        const chosenSize = evt.target.closest('.size__item');
        const allItems = document.querySelectorAll('.size__item');
        allItems.forEach(item => item.classList.remove('size__item-active'));
        chosenSize.classList.add('size__item-active');
        // const size = evt.target.innerText;
    }
    return <div className="product__info">
        <div className="product__info-content">
            <div className="product__info-img">
                <div className="product__info-mainImg">
                    <img src={images[0]} alt="product" />
                </div>
                <div className="product__info-thumbImg">
                    <ul className="thumbs__list">
                        <li className="thumbs__item">
                            <img src={productThumb} alt="thumbnail" />
                        </li>
                        {images.map((img) => (
                        <li className="thumbs__item">
                            <img src={img} alt="img" />
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            <div className="product__info-data">
                <div className="product__info-intro">
                    <p className="product__name">{title}</p>
                    <p className="product__price">{price}$</p>
                </div>
                <div className="product__info-tech">
                    <div className="product__info-color">
                        <p>Color:</p>
                        <span>Blanc</span>
                    </div>
                    <div className="product__info-size">
                        <p>Sizes:</p>
                        <ul className="size__list">
                            <li className="size__item">
                                <button className="size__item-wrapper" onClick={(evt) => chooseSize(evt)}>
                                    <p>4.5</p>
                                </button>
                            </li>
                            <li className="size__item">
                                <button className="size__item-wrapper" onClick={(evt) => chooseSize(evt)}>
                                    <p>5.5</p>
                                </button>
                            </li>
                            <li className="size__item">
                                <button className="size__item-wrapper" onClick={(evt) => chooseSize(evt)}>
                                    <p>6.5</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="product__info-descr">
                        <p>{description}</p>
                    </div>
                    <div className="product__info-btns">
                        <div className="product__cart-btn">
                            <button onClick={() => addItemToCart()}>Add to cart</button>
                        </div>
                        <div className="product__fav-btn">
                            <button>Add to favorites</button>
                        </div>
                    </div>
                    <div className="product__info-other">
                        <p>19 people purchased</p>
                        <p>Find in a store</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export { ProductInfo }