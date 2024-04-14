import {Facebook, Instagram, Twitter} from "lucide-react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__container--socialNetworks">
                    <div className="footer__container--icon">
                        <Facebook />
                    </div>
                    <div className="footer__container--icon">
                        <Instagram />
                    </div>
                    <div className="footer__container--icon">
                        <Twitter />
                    </div>
                </div>
                <div className="footer__container--content">
                    <h2 className="footer__container--title">Services</h2>
                    <p>Space Planning & Layout Design</p>
                    <p>Color & Material Consultation</p>
                    <p>Custom Furniture & Fixture Design</p>
                    <p>Project Management & Implementation</p>
                </div>
                <div className="footer__container--content">
                    <h2 className="footer__container--title">Contact Info</h2>
                    <p>+123-456-7890</p>
                    <p>Hello@awesomesite.com</p>
                    <p>99 Roving St., Big City, PKU 2345</p>
                </div>
                <div className="footer__container--content">
                    <h2 className="footer__container--title">Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="footer__container--btn">Subscribe</button>
                </div>
            </div>
            <div className="footer__copyright">
                <span>Copyright 2024 © alpama | Powered by Andree Roudon</span>
            </div>
        </footer>
    );
}

export default Footer;
