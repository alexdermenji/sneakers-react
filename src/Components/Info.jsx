import React from "react";
import appContext from "../context/context";

export const Info = ({ orderId, image, title, description }) => {
  const { setIsCartOpened } = React.useContext(appContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" src={image} width="120px" alt="empty basket" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button
        className="btnGreen"
        onClick={() => {
          setIsCartOpened(false);
        }}
      >
        <img src="images/arrowBack.svg" alt="back" />
        Back
      </button>
    </div>
  );
};

export default Info;
