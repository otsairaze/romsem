import axios from "axios";
import React from "react";
import Card from "../Card/Card";
import CardCart from "../Card/CardCart";

const Drawer = ({ onClose }) => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://65c3afef39055e7482c16929.mockapi.io/food")
      .then((res) => setItems(res.data));
  }, []);
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
        <div>
          {items.map((item) => (
            <CardCart
              title={item.title}
              price={item.price}
              info={item.info}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
        <button className="cu-p">Оформить заказ</button>
      </div>
    </div>
  );
};

export default Drawer;
