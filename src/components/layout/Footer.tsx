import logo from '../../img/logo.svg';
import youtube from '../../img/socials/youtube.svg';
import instagram from '../../img/socials/instagram.svg';
import facebook from '../../img/socials/facebook.svg';


function Footer() {
    return <footer className="footer">
        <div className="container">
            <div className="footer__content">
                <img src={logo} alt="logo" />
                <div className="developed-by">
                    <p>Developed by <span>nikitakhrulev</span></p>
                </div>
                <ul className="footer__socials-list">
                    <li className="footer__socials__item">
                        <img src={youtube} alt="youtube" />
                    </li>
                    <li className="footer__socials__item">
                        <img src={instagram} alt="instagram" />
                    </li>
                    <li className="footer__socials__item">
                        <img src={facebook} alt="facebook" />
                    </li>
                </ul>
            </div>
        </div>
    </footer>
}

export { Footer }