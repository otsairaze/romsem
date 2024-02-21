const Header = ({ onClickCart, onClickMenu }) => {
  return (
    <div className="container">
      <header className="d-flex">
        <div className="--f-border">
          <p className="--f-text">Наш телефон</p>
          <p className="--f-numb">+996 705 188 955</p>
          <p className="--f-numb">+996 555 188 955</p>
          <p className="--f-time">работаем с 10:00 до 00:00</p>
        </div>
        <div className="d-flex justify-between align-center right">
          <div className="--f-title">
            <p>Город Бишкек:</p>
          </div>
          <div className="d-flex --f-item-block align-center">
            <p className="--f-item">Отзывы</p>
            <p className="--f-item--1">Доставка и оплата</p>
            <img
              className="cu-p"
              onClick={onClickMenu}
              width={30}
              height={30}
              src="../../public/img/Header/menu.png"
              alt=""
            />

            {/* <img src="../../public/img/Header/find.png" alt="" /> */}
            <img
              className="cu-p p-b"
              onClick={onClickCart}
              src="../../public/img/Header/cart.png"
              alt=""
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
