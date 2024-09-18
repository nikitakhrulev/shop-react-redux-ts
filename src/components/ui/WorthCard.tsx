import worth from '../../img/worth.jpg';

function WorthCard() {
    return <div className="worth__item-wrapper">
        <img src={worth} alt="worth" />
            <span className="worth__category">Sneakers</span>
    </div>
}

export { WorthCard }