import React from 'react'
import './CategoryItems.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import categoryVideo from '../../assets/video/1.mp4';

const CategoryItems = (props) => {
    const { searchItems, handleClick } = props;

  return (
    <>
    <div className='video--container'>
        <video loop id="hero--mov" muted className="active" autoPlay>
            <source src={categoryVideo} type="video/mp4"></source>
        </video>

    </div>
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
    </>
  )
}

export default CategoryItems