import Card from "../Components/Card/Card";
import appContext from "../context/context";
import { useContext } from "react";
function Favourites() {
  const { favouriteItems, onAddToFavorites } = useContext(appContext);

  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>My Favourites</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favouriteItems.map((obj, index) => (
          <Card
            key={index}
            {...obj}
            favourite={true}
            onFavourite={onAddToFavorites}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
