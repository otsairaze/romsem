import React from "react";
import axios from "axios";

const CardCart = ({ title, info, price, imageUrl, id, RemoveCartItem }) => {
  const [items, setItems] = React.useState([]);
  function AddCartItem() {
    const obj = {
      id: id,
      title: title,
      info: info,
      price: price,
      imageUrl: imageUrl,
    };
    axios.post("https://65c3afef39055e7482c16929.mockapi.io/cart", obj);
  }

  return (
    <div className="wrapper">
      <div className="cardcart-block">
        <div className="--c-c-">
          <img src={imageUrl} alt="" />
          <div>
            <h3>{title}</h3>
          </div>

          <div className="d-flex align-center">
            <p>{price}</p>
            <button onClick={() => RemoveCartItem(id)}>Удалить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
