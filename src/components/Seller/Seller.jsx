import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Seller = (props) => {
  const { setItems } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [image, setImage] = useState();

  const navigate = useNavigate();
  const itemRef = useRef(null);
  const descRef = useRef(null);
  const imgRef = useRef(null);
  const stockRef = useRef(null);
  const priceRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const result = await fetch("/api/items/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: itemRef.current.value,
        description: descRef.current.value,
        sellPrice: priceRef.current.value,
        stock: stockRef.current.value,
        imgUrl: imgUrl,
      }),
    });

    console.log("result", result);
    if (result.status >= 200 && result.status < 300) {
      console.log("ポスト完了");
      await fetch("/api/items")
        .then((res) => res.json())
        .then((res) => setItems(res))
        .catch((err) => console.error(err));
      navigate("/");

      itemRef.current.value = "";
    } else if (result.status > 400) {
      console.error(
        `エラーステータス : ${result.status}`
      );
    }
  };

    const fileChange = async () => {
      // event.preventDefault();
      if (!selectedFile) {
        console.error("ファイルなし");
        return;
      }

      const formData = new FormData();
      formData.append("image", selectedFile);

      try {
        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Image uploaded:", response.data);
        await setImgUrl(response.data.data.url);
        console.log("セット完了")
      } catch (error) {
        console.error("エラー内容:", error);
      }
    };

  useEffect(() => {
    if (selectedFile) {
      console.log("更新");
      fileChange()
    }
  }, [selectedFile]);

  return (
    <div className="sell_wrapper form_wrapper sell_input">
      {/* <form
        id="sell_input"
        className="sell_list"
        data-controller="alert-page sending"
        action="/api/items/submit"
        acceptCharset="UTF-8"
        method="post"
      > */}
      <div className="sell_item">
        <h3 className="form_title is_required">商品タイトル</h3>
        <p className="form_text form_text_12">100文字まで入力できます</p>
        <div className="textarea_resize_wrap">
          <textarea
            ref={itemRef}
            className="form_textarea height_104 is_seller limit50"
            maxLength="100"
            placeholder="商品の内容が伝わりやすいように、端的にまとめましょう。
                    例：【スニーカー】ナイキ　ジョーダン1"
            id="furima_product_title"
          ></textarea>
        </div>
      </div>
      <div className="sell_item">
        <h3 className="form_title is_required">商品の詳細</h3>
        <p className="form_text form_text_12">1,000文字まで入力できます</p>
        <div className="textarea_resize_wrap">
          <textarea
            ref={descRef}
            className="form_textarea height_168 is_seller limit1000"
            maxLength="1100"
            placeholder="こだわりやアピールポイントなど、商品について詳しく説明しましょう。"
            id="furima_product_detail"
          ></textarea>
        </div>
      </div>
      <div className="sell_item">
        <h3 className="form_title is_required">商品の写真</h3>
        <p className="form_text form_text_12">１枚以上挿入してください</p>

        <input type="file" onChange={handleFileChange} ref={imgRef} />
      </div>
      <div className="sell_item">
        <h3 className="form_title is_required">在庫数</h3>
        <p className="form_text form_text_12">半角数字で入力してください</p>
        <input
          ref={stockRef}
          className="form_input is_small is_seller only_num"
          maxLength="3"
          size="3"
          type="tel"
          name="furima_product[stock]"
          id="furima_product_stock_count"
        ></input>
      </div>

      <div className="sell_item">
        <h3 className="form_title is_required">商品価格</h3>
        <div className="input_price_wrap js_input_price">
          <p className="form_text form_text_12">
            税込み価格を半角数字で入力してください。
          </p>
          <input
            ref={priceRef}
            className="form_input is_small is_seller only_num"
            maxLength="7"
            size="7"
            type="tel"
            name="furima_product[sell_price]"
            id="furima_product_price"
          ></input>
          <span className="unit">円</span>
        </div>
      </div>
      <div className="sell_btn_container">
        <input
          type="submit"
          name="furima_product[img_url]"
          // value={imgUrl}
          className="btn btn_clMain02 submitBtn"
          data-action="click->sending#submit"
          data-disable-with="出品する"
        ></input>
      </div>
      {/* </form> */}

      <div className="sell_btn_container">
        <button onClick={handleSubmit}>送信する</button>
      </div>
    </div>
  );
};
