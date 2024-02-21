import React from "react";

const Drawermenu = ({ onCloseMenu }) => {
  return (
    <div onClick={onCloseMenu} className="overlay">
      <div onClick={(s) => s.stopPropagation()} className="drawer-left">
        <div className="d-flex align-center">
          <div className="m-auto --l-block">
            <img src="./img/Drawermenu/logo.png" alt="" />
          </div>
        </div>
        <div className="d-flex flex-column m-auto --l-block-menu">
          <p>Пицца</p>
          <p>Сеты</p>
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
