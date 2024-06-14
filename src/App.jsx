import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { AllItems } from "./components/AllItems/AllItems.jsx";
import { SingleItem } from "./components/SingleItem/SingleItem.jsx";
import { Navbar } from "./components/Navbar/Navbar";
import { Seller } from "./components/Seller/Seller.jsx";
import { SearchItems } from "./components/SearchItems/SearchItems.jsx";

function App() {
  const [currentView, setCurrentView] = useState("AllItems");
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [isSearch, setIsSearch] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [refresh, setRefresh] = useState(false);

  


  const navigate = useNavigate();

  function handleClick(item) {
    setSelectedItem(item);
    setCurrentView(SingleItem);
  }

  const search = (word) => {
    const targetWord = new RegExp(`${word}`, "i");
    const result = items.filter((obj) => {
      return targetWord.test(obj.item);
    });
    setSearchItems(result);
    navigate("/search");
  };


  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((res) => setItems(res))
      .catch((err) => console.error(err));
  }, [refresh]);
  console.log(items);
  return (
    <>

      <Link to="/" className="btn btn_clMain_common btn_service_order">
        <h1>フリーマーケット</h1>
      </Link>
        <Navbar moveHome={setCurrentView} search={search} />
        <Routes>
          <Route
            path="/"
            element={<AllItems items={items} handleClick={handleClick} />}
          />
          <Route
            path="/search"
            element={<SearchItems searchItems={searchItems} handleClick={handleClick} />}
          />
          <Route
            path="/items/description"
            element={<SingleItem selectedItem={selectedItem} setRefresh={setRefresh} refresh={refresh} />}
          />
          <Route path="/seller" element={<Seller setItems={setItems} />} />
        </Routes>

    </>
  );
}

export default App;
