import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./AllItems.css";


export const AllItems = (props) => {
  const { items, handleClick } = props;

  console.log(items);

  return (
    <div className="productList">
      {items.map((itemObj, index) => (
        <section key={index} className="productBox">
          <Link to="/items/description" className="single" onClick={() => handleClick(items[index])}>
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
