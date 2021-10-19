import styles from "./styles.module.scss";
import { useState, useContext } from "react";
import ContentLoader from "react-content-loader";
import appContext from "../../context/context";

function Card({
  id,
  name,
  image,
  price,
  onPlus,
  onFavourite,
  favourite = false,
  isLoading,
}) {
  const { isItemAdded } = useContext(appContext);
  const [isFavourite, setIsFavourite] = useState(favourite);
  const onClickFavourite = () => {
    onFavourite({ id, name, image, price });
    setIsFavourite(!isFavourite);
  };

  const onClickPlus = () => {
    onPlus();
  };
  return (
    <div className={styles.card}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={265}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="101" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="130" rx="5" ry="5" width="78" height="15" />
          <rect x="0" y="159" rx="5" ry="5" width="78" height="15" />
          <rect x="96" y="134" rx="5" ry="5" width="48" height="38" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favourite}>
            <img
              onClick={onClickFavourite}
              src={
                isFavourite ? "/images/heartRed.png" : "/images/heartWhite.svg"
              }
              alt="like"
            />
          </div>
          <img src={image} width={133} height={112} alt="" />
          <h5>{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>£{price}</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={
                isItemAdded(id) ? "images/arrowGreen.svg" : "images/plus.svg"
              }
              alt="add "
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
