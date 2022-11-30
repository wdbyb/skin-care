import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/">
        <img width="231" height="61" src="./src/assets/logo.png" alt="Logo" />
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Bestsellers</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
      <button className="cart" type="button">
        <span className="cart__amount">0</span>
        <span className="cart__name">Cart</span>
      </button>
    </header>
  );
}

export default Header;
