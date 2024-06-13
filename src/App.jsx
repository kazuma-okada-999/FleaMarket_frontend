import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AllItems } from "./components/AllItems/AllItems.jsx";
// import { SingleItem } from "./components/SingleItem.jsx";
import { Navbar } from "./components/Navbar/Navbar";
import { Seller } from "./components/Seller/Seller.jsx";

function App() {
  const [currentView, setCurrentView] = useState("AllItems");
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [refresh, setRefresh] = useState(true);

  function handleClick(item) {
    setSelectedItem(item);
    setCurrentView(SingleItem);
  }

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((res) => setItems(res))
      .catch((err) => console.error(err));
  }, []);
  console.log(items)
  return (
    <>
      <BrowserRouter>
        <h1>DIG フリーマーケット</h1>
        <Navbar moveHome={setCurrentView} refresh={setRefresh} />
        <Routes>
          <Route path="/" element={<AllItems items={items} handleClick={handleClick} />} />
          <Route path="/seller" element={<Seller setItems={setItems} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
