import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { Categories } from "../ui/Categories";
import { CartContent } from "../ui/CartContent";

function Cart() {
    return (
        <>
        <Header />
        <main className="main">
            <div className="container">
                <div className="cart__container">
                    <Categories />
                    <CartContent />
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}

export { Cart }