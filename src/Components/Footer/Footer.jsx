import React from "react";

const Footer = () => {
  return (
    <div className="wrapper">
      <footer className="footer">
        <div className="footer-wrapper d-flex justify-between">
          <div className="f-f-b">
            <ul className="f-f-b">
              <li>О компании</li>
              <li>Доставка и оплата</li>
              <li>Лента материалов</li>
              <li>Политика возврата</li>
            </ul>
          </div>
          <div className="s-f-b">
            <p>Введите номер</p>
            <p>
              <span>+996 (__) ___ __ __</span>
            </p>
            <p>
              <span>Выберите удобный мессенджер для общения</span>
            </p>
            <div>
              <img src="../../public/img/Footer/footer-1.png" alt="" />
              <img src="../../public/img/Footer/footer-2.png" alt="" />
              <img src="../../public/img/Footer/footer-3.png" alt="" />
            </div>
          </div>
          <div className="t-f-b">
            <p>
              <span>Тел:+996 705 188 955</span>{" "}
            </p>
            <p>
              <span>Тел:+996 555 188 955 </span>
            </p>
            <p>Адрес:Бакаева 126</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
