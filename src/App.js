import "./App.css";
import "macro-css";

import { Route } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Header from "./Components/Header.jsx";
import Drawer from "./Components/Drawer.jsx";
import appContext from "./context/context";
function App() {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onAddToFavorites = async (obj) => {
    try {
      if (favouriteItems.find((item) => item.id === obj.id)) {
        axios.delete(
          `https://615ee75faf36590017204644.mockapi.io/favourites/${obj.id}`
        );
        setFavouriteItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://615ee75faf36590017204644.mockapi.io/favourites",
          obj
        );
        setFavouriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log("There is an error");
    }
  };

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => item.id === obj.id)) {
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
        axios.delete(
          `https://615ee75faf36590017204644.mockapi.io/cart/${obj.id}`
        );
      } else {
        axios.post("https://615ee75faf36590017204644.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {}
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://615ee75faf36590017204644.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://615ee75faf36590017204644.mockapi.io/cart"
      );
      const favoriteResponse = await axios.get(
        "https://615ee75faf36590017204644.mockapi.io/favourites"
      );

      const itemsResponse = await axios.get(
        "https://615ee75faf36590017204644.mockapi.io/items"
      );
      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavouriteItems(favoriteResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const isItemAdded = (id) => {
    return cartItems.some((product) => product.id === id);
  };

  return (
    <appContext.Provider
      value={{
        items,
        cartItems,
        favouriteItems,
        isItemAdded,
        onAddToFavorites,
        setIsCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        {isCartOpened && <Drawer onRemove={onRemoveItem} items={cartItems} />}
        <Header
          onCartClick={() => {
            setIsCartOpened(true);
          }}
        />

        <Route path="/" exact>
          <Home
            cartItems={cartItems}
            onChangeSearchInput={onChangeSearchInput}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            items={items}
            onAddToCart={onAddToCart}
            onAddToFavorites={onAddToFavorites}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/favourites" exact>
          <Favourites />
        </Route>
      </div>
    </appContext.Provider>
  );
}

export default App;
