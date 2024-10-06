import { ListItem } from "../ui/ListItem"

function Less() {
    return <div className="less">
        <div className="container">
            <div className="trending__content">
                <div className="trending__title-wrapper">
                    <h2 className="trending__title title">Less than 100$</h2>
                </div>
                {/* <ul className="trending__list">
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
                </ul> */}
                <div className="trending__btn">
                    <button>See more</button>
                </div>
            </div>
        </div>
    </div>
}

export { Less }