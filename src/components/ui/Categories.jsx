import { useSelector } from "react-redux"

function Categories() {

    const categories = useSelector(state => state.categories);
    console.log(categories)

    return <div className="categories">
            <div className="categories__content">
                <span className="categories__title">categories</span>
                <ul className="categories__list">
                    {
                        categories.map((category) => (
                            category.name === 'dsd' ?
                            '' :
                            <li className="categories__item"><a href="#!">{category.name}</a></li>
                        ))
                    }
                </ul>
                <div className="categories__nav">
                    <span>Help</span>
                    <span>Terms & Conditions</span>
                </div>
            </div>
    </div>
}

export { Categories }