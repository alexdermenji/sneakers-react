import { useContext, useState } from "react";
import { useCart } from "../../hooks/useCart";
import appContext from "../../context/context";
import styles from "./styles.module.scss";
import Info from "../Info";
import axios from "axios";
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
function Drawer({ onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const { setIsCartOpened } = useContext(appContext);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const onOrderComplete = async () => {
    try {
      const { data } = await axios.post(
        "https://615ee75faf36590017204644.mockapi.io/orders",
        { items: cartItems }
      );

      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://615ee75faf36590017204644.mockapi.io/cart/" + item.id
        );
        await delay();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between ">
          Basket
          <img
            onClick={() => {
              setIsCartOpened(false);
            }}
            className="removeBtn cu-p"
            src="/images/buttonRemove.svg"
            alt="close"
          />
        </h2>
        {!items.length ? (
          <Info
            orderId={orderId}
            title={isOrderCompleted ? "Order completed" : "Cart is empty"}
            description={
              isOrderCompleted
                ? `Your order #${orderId} is proccessing and will be delivered soon`
                : "Please add items to basket"
            }
            image={
              isOrderCompleted ? "/images/complete.jpg" : "/images/empty.png"
            }
          />
        ) : (
          <>
            <div className="items">
              {items.map((item) => {
                const { image, name, price, id } = item;
                return (
                  <div key={id} className="cartItem d-flex align-center mb-20">
                    <img
                      className="mr-20"
                      src={image}
                      width={70}
                      height={70}
                      alt="Sneakers "
                    />
                    <div className="mr-20">
                      <p className="mb-5">{name}</p>
                      <b>£{price}</b>
                    </div>
                    <img
                      onClick={() => {
                        onRemove(id);
                      }}
                      className="removeBtn"
                      src="/images/buttonRemove.svg"
                      alt="delete"
                    />
                  </div>
                );
              })}
            </div>

            <div className="cartTotal">
              <ul className="cartTotal">
                <li className="d-flex">
                  <span>Total</span>
                  <div></div>
                  <b>£{totalPrice}</b>
                </li>
                <li className="d-flex">
                  <span>Tax 5%</span>
                  <div></div>
                  <b>£{(totalPrice / 100) * 5}</b>
                </li>
              </ul>
              <button onClick={onOrderComplete} className="btnGreen">
                Order <img src="/images/arrowRight.svg" alt="arrow" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Drawer;
