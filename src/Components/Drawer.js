function Drawer() {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between ">
          Basket
          <img
            className="removeBtn cu-p"
            src="/images/buttonRemove.svg"
            alt=""
          />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              src="/images/1.jpg"
              width={70}
              height={70}
              alt="Sneakers "
            />
            <div className="mr-20">
              <p className="mb-5">Under Armour Curry 8</p>
              <b>£120</b>
            </div>
            <img className="removeBtn" src="/images/buttonRemove.svg" alt="" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              src="/images/1.jpg"
              width={70}
              height={70}
              alt="Sneakers "
            />
            <div className="mr-20">
              <p className="mb-5">Under Armour Curry 8</p>
              <b>£120</b>
            </div>
            <img className="removeBtn" src="/images/buttonRemove.svg" alt="" />
          </div>
        </div>

        <div className="cartTotal">
          <ul className="cartTotal">
            <li className="d-flex">
              <span>Total</span>
              <div></div>
              <b>£240</b>
            </li>
            <li className="d-flex">
              <span>Tax 5%</span>
              <div></div>
              <b>£ 10</b>
            </li>
          </ul>
          <button className="btnGreen">
            Order <img src="/images/arrowRight.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
