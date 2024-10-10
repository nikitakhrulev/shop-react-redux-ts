import { Header } from "../layout/Header";
import { First } from "../layout/First";
import { Trending } from "../layout/Trending";
import { Worth } from "../layout/Worth";
import { NYSale } from "../layout/NYSale";
import { Cheap } from "../layout/Cheap";
import { Footer } from "../layout/Footer";
import { Sidenav } from "../layout/Sidenav";


function Homepage() {
    return (
        <>
        <Header />
        <First />
        <Trending />
        <Worth />
        <NYSale />
        <Cheap />
        <Footer />
        <Sidenav />
        </>
    )
}
export { Homepage }

