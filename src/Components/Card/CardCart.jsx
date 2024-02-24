import React from "react";
import axios from "axios";

const CardCart = ({ title, info, price, imageUrl, id }) => {
  const [items, setItems] = React.useState([]);
  function AddCartItem() {
    const obj = {
      id: id,
      title: title,
      info: info,
      price: price,
      imageUrl: imageUrl,
    };
    axios.post("https://65c3afef39055e7482c16929.mockapi.io/food", obj);
  }

  return (
    <div className="wrapper">
      <div className="cardcart-block">
        <div className="--c-c-">
          <img src={imageUrl} alt="" />
          <h3>{title}</h3>
          <p className="--c-t">{info}</p>
          <div className="d-flex align-center">
            <p>{price}</p>
            <button onClick={AddCartItem}>Хочу</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
