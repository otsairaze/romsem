import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <header className="d-flex">
          <div className="--f-border">
            <p className="--f-text">Наш телефон</p>
            <p>+996 705 188 955</p>
            <p>+996 555 188 955</p>
            <p>работаем с 10:00 до 00:00</p>
          </div>
          <div className="--s-border">
            <div className="d-flex">
              <div>
                <p>Город:</p>
                <p>Бишкек</p>
              </div>
              <div>
                <p>Отзывы</p>
                <p>Доставка и оплата</p>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
