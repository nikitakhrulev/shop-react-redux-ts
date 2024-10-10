import { ListItem } from "../ui/ListItem"
import { useSelector } from "react-redux"


function Cheap() {
    const cheap = useSelector(state => state.cheap)
    console.log(cheap)
    return <div className="less">
        <div className="container">
            <div className="trending__content">
                <div className="trending__title-wrapper">
                    <h2 className="trending__title title">Less than 100$</h2>
                </div>
                <ul className="trending__list">
                    {
                        cheap.map((item) => (
                            <li className="trending__item" key={item.id}>
                                <ListItem data={item}/>
                            </li>

                        ))
                    }
                </ul>
                <div className="trending__btn">
                    <button>See more</button>
                </div>
            </div>
        </div>
    </div>
}

export { Cheap }