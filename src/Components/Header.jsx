import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header({ onCartClick }) {
  const { totalPrice } = useCart();
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img src="images/logo.png" alt="logo" width={40} height={40} />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Best sneakers store</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={onCartClick}>
          <img src="images/cart.svg" alt="logo" width={18} height={18} />
          <span>{totalPrice}£</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favourites">
            <img
              src="images/favourites.svg"
              alt="favourites"
              width={18}
              height={18}
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img src="images/user.svg" alt="user" width={18} height={18} />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
