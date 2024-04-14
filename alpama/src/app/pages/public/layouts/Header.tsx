import {AlignJustify, ShoppingCart, X} from 'lucide-react';
import logo from '../../../../assets/images/logo_alpama.png';
import {Link} from "react-router-dom";

function Header() {

  const handleMenuOpen = () => {
    const menuMobile = document.querySelector('.header__menu-mobile');
    if (menuMobile) {
      menuMobile.classList.toggle('menu-open');
    }
  };

  const handleMenuClose = () => {
    const menuMobile = document.querySelector('.header__menu-mobile');
    if (menuMobile) {
      menuMobile.classList.remove('menu-open');
    }
  };

  return (
    <header className="header">
      <div className="header__menuIcon" onClick={handleMenuOpen}>
        <AlignJustify size={36}/>
      </div>
      <div className="header__menu-mobile">
        <div className="header__menu-mobile--close" onClick={handleMenuClose}>
          <X />
        </div>
        <div className="header__logo">
          <img className="header__logo--img" src={logo} alt="logo alpama"/>
          <span className="header__logo--name">alpama</span>
        </div>
        <ul className="header__menu">
          <Link to="/" onClick={handleMenuClose}>
            <li className="header__menu--item">Home</li>
          </Link>
          <Link to="/collections" onClick={handleMenuClose}>
            <li className="header__menu--item">Collections</li>
          </Link>
          <Link to="/shop" onClick={handleMenuClose}>
            <li className="header__menu--item">Shop</li>
          </Link>
          <Link to="/about" onClick={handleMenuClose}>
            <li className="header__menu--item">About</li>
          </Link>
          <Link to="/contact" onClick={handleMenuClose}>
            <li className="header__menu--item">Contact</li>
          </Link>
        </ul>
        <Link to="/sign-in" className="header__actions--btn" onClick={handleMenuClose}>Professional access</Link>
      </div>


      <div className="header__logo header__hidden">
        <img className="header__logo--img" src={logo} alt="logo alpama"/>
        <span className="header__logo--name">alpama</span>
      </div>
      <ul className="header__menu header__hidden">
        <Link to="/">
          <li className="header__menu--item">Home</li>
        </Link>
        <Link to="/collections">
          <li className="header__menu--item">Collections</li>
        </Link>
        <Link to="/shop">
          <li className="header__menu--item">Shop</li>
        </Link>
        <Link to="/about">
          <li className="header__menu--item">About</li>
        </Link>
        <Link to="/contact">
          <li className="header__menu--item">Contact</li>
        </Link>
      </ul>
      <div className="header__actions">
        <Link to="/sign-in" className="header__actions--btn header__hidden">Professional access</Link>
        <div className="header__actions--cart">
          <ShoppingCart/>
        </div>
      </div>
    </header>
  );
}

export default Header;
