import bigsale from '../../img/big-sale.png'
import computer from '../../img/hero-computer.png'

function Hero() {
    return <div className="hero">
       <div className="hero__content">
        <img src={bigsale} alt="sale" className='sale-img'/>
            <span className="bestseller">the bestseller of 2022</span>
            <p className="bestseller__title">LENNON r2d2<br />with NVIDIA 5090 TI</p>
            <button className="hero__btn">Shop Now</button>
            <div className="hero__computer">
                <img src={computer} alt="computer" />
            </div>
       </div>
    </div>
}

export { Hero }