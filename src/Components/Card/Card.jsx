import React from "react";
import axios from "axios";

const Card = ({ title, info, price, imageUrl, id }) => {
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
      <div className="novelty-block">
        <div className="--n-s">
          <img src={imageUrl} alt="" />
          <h3>{title}</h3>
          <p className="--n-p --n-p-1">{info}</p>
          <div className="d-flex align-center">
            <p>{price}</p>
            <button onClick={AddCartItem}>Хочу</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
