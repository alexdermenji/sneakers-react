function Card() {
  return (
    <div className="card">
      <div className="favourite">
        <img src="images/heartWhite.svg" alt="unliked" />
      </div>
      <img src="images/1.jpg" width={133} height={112} alt="" />
      <h5>Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>£120</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="images/plus.svg" alt="add " />
        </button>
      </div>
    </div>
  );
}

export default Card;
