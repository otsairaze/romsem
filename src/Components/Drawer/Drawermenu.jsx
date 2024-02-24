import React from "react";

import { Link } from "react-router-dom";

const Drawermenu = ({ onCloseMenu }) => {
  return (
    <div onClick={onCloseMenu} className="overlay">
      <div onClick={(s) => s.stopPropagation()} className="drawer-left">
        <div className="d-flex align-center">
          <div className="m-auto --l-block">
            <Link to="/">
              <img src="./img/Drawermenu/logo.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="d-flex flex-column m-auto --l-block-menu">
          <p>Пицца</p>
          <p>
            <Link to="/set">Сеты</Link>
          </p>

          <p>WOK</p>
          <p>Роллы</p>
          <p>Суши</p>
          <p>Салаты</p>
          <p>Супы</p>
          <p>Корн доги</p>
          <p>Напитки</p>
          <p>Акции</p>
        </div>
      </div>
    </div>
  );
};

export default Drawermenu;
