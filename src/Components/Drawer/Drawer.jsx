import axios from "axios";
import React from "react";

import CardCart from "../Card/CardCart";

const Drawer = ({ onClose, id }) => {
  const [items, setItems] = React.useState([]);
  function fetchCartItem() {
    axios
      .get("https://65c3afef39055e7482c16929.mockapi.io/cart")
      .then((res) => setItems(res.data));
  }
  React.useEffect(() => {
    fetchCartItem();
  }, []);
  const RemoveCartItem = async (id) => {
    await axios.delete(
      `https://65c3afef39055e7482c16929.mockapi.io/cart/${id}`
    );
    fetchCartItem();
  };

  return (
    <div onClick={onClose} className="overlay">
      <div onClick={(e) => e.stopPropagation()} className="drawer">
        <div className="d-flex justify-between align-center">
          <p>Корзина</p>
          <img
            width={30}
            height={30}
            className="cu-p"
            onClick={onClose}
            src="./img/Drawer/1.png"
            alt=""
          />
        </div>
        <div className="h-b">
          {items.map((item) => (
            <CardCart
              title={item.title}
              price={item.price}
              info={item.info}
              imageUrl={item.imageUrl}
              id={item.id}
              RemoveCartItem={(id) => RemoveCartItem(id)}
            />
          ))}
        </div>
        <button className="cu-p">Оформить заказ</button>
      </div>
    </div>
  );
};

export default Drawer;
