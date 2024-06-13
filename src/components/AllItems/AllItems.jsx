import React from "react";

import "./AllItems.css";

// const testItems = [

//   {
//     id: 1,
//     item: "Nike Air Jordan 1",
//     description: "ほぼ新品のスニーカーです！",
//     sell_price: 160000,
//     stock: 1,
//   },
//   {
//     id: 2,
//     item: "Switch 不思議のダンジョン 風来のシレン",
//     description:
//       "「Switch 不思議のダンジョン 風来のシレン6 とぐろ島探検録」です！",
//     sell_price: 4000,
//     stock: 1,
//   },
//   {
//     id: 3,
//     item: "ルギア　ぬいぐるみ",
//     description: "ルギアのぬいぐるみです。ポケモンセンターにて購入。",
//     sell_price: 1300,
//     stock: 1,
//   },
// ]

export const AllItems = (props) => {
  const { items, handleClick } = props;
  return (
    <div className="productList">
      {items.map((itemObj, index) => (
        <section key={index} className="productBox">
          <a>
            <div className="detail">
              <div className="img_wrap">
                <img src={itemObj.imgUrl} />
                <div className="priceBox">
                  <span className="txt_price">{`¥ ${
                    itemObj.sellPrice
                  }`}</span>
                </div>
              </div>
              <div className="inner">
                <h3 className="caption">{itemObj.item}</h3>
              </div>
            </div>
          </a>
        </section>
      ))}
    </div>
  );
};
