function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="images/logo.png" alt="logo" width={40} height={40} />
        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p className="opacity-5">Best sneakers store</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img src="images/cart.svg" alt="logo" width={18} height={18} />
          <span>120£</span>
        </li>
        <li>
          <img src="images/user.svg" alt="logo" width={18} height={18} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
