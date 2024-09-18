import { ListItem } from "../ui/ListItem"

function Trending() {
    return <div className="trending">
        <div className="container">
            <div className="trending__content">
                <div className="trending__title-wrapper">
                    <h2 className="trending__title title">Trending</h2>
                </div>
                <ul className="trending__list">
                    <li className="trending__item">
                        <ListItem />
                    </li>
                    <li className="trending__item">
                        <ListItem />
                    </li>
                    <li className="trending__item">
                        <ListItem />
                    </li>
                    <li className="trending__item">
                        <ListItem />
                    </li>
                    <li className="trending__item">
                        <ListItem />
                    </li>
                </ul>
                <div className="trending__btn">
                    <button>See more</button>
                </div>
            </div>
        </div>
    </div>
}

export { Trending } 