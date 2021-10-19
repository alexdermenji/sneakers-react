import "./App.css";
import "macro-css";

import { Route } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Orders from "./pages/Orders";
import Header from "./Components/Header.jsx";
import Drawer from "./Components/Drawer/Drawer.jsx";
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

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => item.parentId === obj.id);
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => item.parentId !== obj.id));
        await axios.delete(
          `https://615ee75faf36590017204644.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://615ee75faf36590017204644.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      console.log("error happened");
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const onRemoveItem = async (id) => {
    try {
      axios.delete(`https://615ee75faf36590017204644.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => +item.id !== +id));
    } catch (error) {
      console.log("error happened");
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoriteResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://615ee75faf36590017204644.mockapi.io/cart"),
            axios.get("https://615ee75faf36590017204644.mockapi.io/cart"),
            axios.get("https://615ee75faf36590017204644.mockapi.io/items"),
          ]);

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavouriteItems(favoriteResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        console.log("Error happened");
      }
    }

    fetchData();
  }, []);

  const isItemAdded = (id) => {
    return cartItems.some((product) => product.parentId === id);
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
        <Drawer
          onRemove={onRemoveItem}
          items={cartItems}
          opened={isCartOpened}
        />

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
        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
    </appContext.Provider>
  );
}

export default App;
