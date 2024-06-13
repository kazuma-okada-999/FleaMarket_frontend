import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./SearchItems.css";


export const SearchItems = (props) => {
  const { searchItems, handleClick } = props;

  console.log(searchItems);

  return (
    <div className="productList">
      {searchItems.map((itemObj, index) => (
        <section key={index} className="productBox">
          <Link to="/items/description" className="single" onClick={() => handleClick(searchItems[index])}>
            <a>
              <div className="detail">
                <div className="img_wrap">
                  <img src={itemObj.imgUrl} />
                  <div className="priceBox">
                    <span className="txt_price">{`¥ ${itemObj.sellPrice}`}</span>
                  </div>
                </div>
                <div className="inner">
                  <h3 className="caption">{itemObj.item}</h3>
                </div>
              </div>
            </a>
          </Link>
        </section>
      ))}
    </div>
  );
};
