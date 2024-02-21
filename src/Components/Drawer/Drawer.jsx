const Drawer = ({ onClose }) => {
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

        <button className="cu-p">Оформить заказ</button>
      </div>
    </div>
  );
};

export default Drawer;
