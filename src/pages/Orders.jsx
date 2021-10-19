import React from "react";
import axios from "axios";
import Card from "../Components/Card/Card";
import { useState } from "react";
function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  React.useEffect(() => {
    try {
      (async () => {
        const { data } = await axios.get(
          "https://615ee75faf36590017204644.mockapi.io/orders"
        );
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      })();
    } catch (error) {
      console.log("Error happend");
    }
  }, []);

  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>My orders</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(4)] : orders).map((order, index) => (
          <Card isLoading={isLoading} key={index} {...order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
