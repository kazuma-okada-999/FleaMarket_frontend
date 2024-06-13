import React from "react";
import "./SingleItem.css";

export const SingleItem = (props) => {
  const { selectedItem } = props;
  console.log(selectedItem);
  return (
    <>
      <div id="wrapper" data-controller="product">
        <article className="productDetail">
          <div className="productDetail_wrapper">
            <div className="productDetail_imgWrap">
              <div className="productImgModalOpen pc_only">
                <div className="img_main">
                  <div className="img js-productImgModalOpen" data-index="0">
                    <img src={selectedItem ? selectedItem.imgUrl : ""}></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="productDetail_content">
              <section>
                <h2 className="productDetail_caption">
                  {selectedItem ? selectedItem.item : ""}
                </h2>
                <div className="productDetail_info">
                  <span className="stock">{`在庫数：${
                    selectedItem ? selectedItem.stock : 0
                  }`}</span>
                </div>
                <div className="productDetail_priceBox">
                  <span className="txt_price">{`¥ ${
                    selectedItem ? selectedItem.sellPrice : ""
                  }`}</span>
                  <span className="tag_shipping is_included">送料無料</span>
                </div>
              </section>
              <section className="productDescription is_accordion">
                <div className="productDescription_inner">
                  <h4 className="caption">商品の説明</h4>
                  <p className="text">
                    {selectedItem ? selectedItem.description : ""}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
