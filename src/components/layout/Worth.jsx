import { WorthCard } from "../ui/WorthCard"
import { useSelector } from "react-redux"

function Worth() {
    const worth = useSelector(state => state.categories)
    console.log(worth)
    return <div className="worth">
        <div className="container">
            <div className="worth__content">
                <div className="worth__title-wrapper">
                    <h2 className="worth__title title">Worth seeing</h2>
                </div>
                <ul className="worth__list">
                    {
                        worth.map((item) => (
                        <li className="worth__item" key={item.id}>
                            <WorthCard data={item}/>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
}

export { Worth }