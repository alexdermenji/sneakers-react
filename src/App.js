import "./App.css";
import "macro-css";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="images/logo.png" alt="logo" width={40} height={40} />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Best sneakers store</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="images/cart.svg" alt="logo" width={18} height={18} />
            <span>120£</span>
          </li>
          <li>
            <img src="images/user.svg" alt="logo" width={18} height={18} />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>
        <div className="d-flex">
          <div className="card">
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
          <div className="card">
            <img src="images/2.jpg" width={133} height={112} alt="" />
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
          <div className="card">
            <img src="images/3.jpg" width={133} height={112} alt="" />
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
          <div className="card">
            <img src="images/4.jpg" width={133} height={112} alt="" />
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
        </div>
      </div>
    </div>
  );
}

export default App;
