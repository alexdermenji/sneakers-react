import Card from "../Components/Card/Card";

function Home({
  onChangeSearchInput,
  searchValue,
  setSearchValue,
  items,
  onAddToCart,
  onAddToFavorites,
  isLoading,
}) {
  function renderItems() {
    return (
      isLoading
        ? [...Array(4)]
        : items.filter((item) => item.name.toLowerCase().includes(searchValue))
    ).map((obj, index) => (
      <Card
        isLoading={isLoading}
        key={index}
        {...obj}
        onPlus={() => {
          onAddToCart(obj);
        }}
        onFavourite={() => {
          onAddToFavorites(obj);
        }}
      />
    ));
  }
  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>All sneakers</h1>
        <div className="search-block d-flex">
          <img src="/images/search.svg" alt="search" />
          <input
            onChange={onChangeSearchInput}
            type="text"
            placeholder="Search..."
            value={searchValue}
          />
          {searchValue && (
            <img
              onClick={() => {
                setSearchValue("");
              }}
              className="clear cu-p"
              src="/images/buttonRemove.svg"
              alt=""
            />
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
