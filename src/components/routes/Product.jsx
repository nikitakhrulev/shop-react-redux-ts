import { useParams } from 'react-router-dom';

import { Header } from "../layout/Header"
import { Footer } from '../layout/Footer';
import { ProductInfo } from '../ui/ProductInfo';
import { Categories } from '../ui/Categories';
import { Related } from '../layout/Related';

function Product() {
    const { id } = useParams();
    return (
        <>
        <Header />
        <main className="main">
            <div className="container">
                <div className="product__content">
                    <Categories />
                    <ProductInfo />
                </div>
            </div>
                <div className="product__related">
                    <Related />
                </div>
        </main>
        <Footer />
        </>
    )
}

export { Product }