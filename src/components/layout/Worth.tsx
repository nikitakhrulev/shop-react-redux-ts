import { WorthCard } from "../ui/WorthCard"

function Worth() {
    return <div className="worth">
        <div className="container">
            <div className="worth__content">
                <div className="worth__title-wrapper">
                    <h2 className="worth__title title">Worth seeing</h2>
                </div>
                <ul className="worth__list">
                    <li className="worth__item">
                        <WorthCard />
                    </li>
                    <li className="worth__item">
                        <WorthCard />
                    </li>
                    <li className="worth__item">
                        <WorthCard />
                    </li>
                    <li className="worth__item">
                        <WorthCard />
                    </li>
                    <li className="worth__item">
                        <WorthCard />
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export { Worth }