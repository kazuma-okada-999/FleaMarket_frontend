import React from "react";
import { Upload } from "../Upload/Upload.jsx";
import './Navbar.css'

export const Navbar = (props) => {
  const { moveHome, refresh } = props;

  return (
    <div className="navbar">
      <h1 className="navbar-header" onClick={() => moveHome("AllPhotos")}>
        おすすめ
      </h1>
      <div id="header_search_area" className="pc_only">
        <form
          id="serviceSearchForm"
          className="serviceSearchForm"
          action="/search"
          acceptCharset="UTF-8"
          method="get"
        >
          <input
            type="search"
            id="keyword"
            name="keyword"
            placeholder="検索キーワード（商品/出品者名など）を入力"
            value=""
            data-action="keydown.enter->product-list-filter#searchProducts"
          ></input>
          <span className="bg">
            <input
              type="button"
              className="submitBtn fa"
              value="検索する"
              data-action="click->product-list-filter#searchProducts"
              aria-hidden="true"
            ></input>
          </span>
        </form>
      </div>
      <Upload refresh={refresh} />
    </div>
  );
};
