import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ShopList from "./components/ShopList";
import ShopItem from "./components/ShopItem";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/ShopList" element={<ShopList />}/>
          <Route path="/ShopItem" element={<ShopItem />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
