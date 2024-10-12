import { ListItem } from "../ui/ListItem";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function Trending() {
    const trending = useSelector(state => state.trending);
    console.log(trending)
    trending.forEach(el => console.log(el))
    return <div className="trending">
        <div className="container">
            <div className="trending__content">
                <div className="trending__title-wrapper">
                    <h2 className="trending__title title">Trending</h2>
                </div>
                <ul className="trending__list">
                    {trending.map((item) => (
                        <li className="trending__item" key={item.id}>
                           <Link to={`/product/${item.id}`}>
                                <ListItem data={item}/>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="trending__btn">
                    <button>See more</button>
                </div>
            </div>
        </div>
    </div>
}

export { Trending } 