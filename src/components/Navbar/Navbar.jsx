import React from "react";
import { useRef, useState, useEffect } from "react";
import { Upload } from "../Upload/Upload.jsx";
import './Navbar.css'
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";


export const Navbar = (props) => {
  const { moveHome, refresh, search } = props;

  const itemRef = useRef(null);
  const navigate = useNavigate();

  const clickHandler = () => {
    search(itemRef.current.value)
    itemRef.current.value = ''
  }
  

  return (
    <div className="navbar">
      <h3 className="navbar-header" onClick={() => moveHome("AllPhotos")}>
        おすすめ
      </h3>
      <div id="header_search_area" className="pc_only">
        <div
          id="serviceSearchForm"
          className="serviceSearchForm"
        >
          <input
          ref={itemRef}
            type="search"
            placeholder="検索キーワード（商品）を入力"
          ></input>
          <span className="bg">
            <button
             onClick={clickHandler}
              className="submitBtn fa"
            >検索する</button>
          </span>
        </div>
      </div>
      <Upload refresh={refresh} />
    </div>
  );
};
