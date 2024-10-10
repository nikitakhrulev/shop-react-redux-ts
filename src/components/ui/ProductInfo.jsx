import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import productImg from '../../img/product.jpg';
import productThumb from '../../img/product-thumbnail.jpg';

function ProductInfo() {
    const { id } = useParams();
    const productId = Number(id);
    console.log(productId)
    const product = useSelector(state => state.trending.find((item) => item.id === productId));
    if (!product) {
        return <p>item not found</p>
    }
    const { title, images, price, description } = product;
  
    console.log(product)

    // const addItemToCart = () => {

    // }

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
                            <li className="size__item">4.5</li>
                            <li className="size__item">4.5</li>
                            <li className="size__item">4.5</li>
                        </ul>
                    </div>
                    <div className="product__info-descr">
                        <p>Sneaker in air mesh and suede goatskin.
                        Light sole with contrasting design for a versatile and modern look.</p>
                    </div>
                    <div className="product__info-btns">
                        <div className="product__cart-btn">
                            <button>Add to cart</button>
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