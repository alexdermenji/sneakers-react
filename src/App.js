import "./App.css";
import "macro-css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Drawer from "./Components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/images/search.svg" alt="search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
