import Card from "../../Components/Card/Card";

const Main = () => {
  const items = [
    {
      title: "Саломон сет",
      info: "1050 грамм, 30 кусочков",
      price: "1499",
      imageUrl: "../../public/img/Novelty/1.png",
    },
    {
      title: "Сет 5 Филадельфи",
      info: "1120 грамм 40 кусочек",
      price: "1999",
      imageUrl: "../../public/img/Novelty/2.png",
    },
    {
      title: "Филадельфия и лосось сет",
      info: "1260 грамм 36 кусочек",
      price: "1700",
      imageUrl: "../../public/img/Novelty/3.png",
    },
  ];
  return (
    <>
      <div className="wrapper">
        <div>
          <a
            href="
          
            "
          >
            <img src="../../public/img/main-1.png" alt="" />
          </a>
        </div>
        <div className="--menu-block">
          <div className="--m-1 --m-pos">
            <img src="../../public/img/Menu/1.png" alt="" />
            <p>Чикен</p>
          </div>
          <div className="--m-2 --m-pos">
            <img src="../../public/img/Menu/2.png" alt="" />
            <p>С угрем</p>
          </div>
          <div className="--m-3 --m-pos">
            <img src="../../public/img/Menu/3.png" alt="" />
            <p>Корн дог</p>
          </div>
          <div className="--m-4 --m-pos">
            <img src="../../public/img/Menu/4.png" alt="" />
            <p>Пицца</p>
          </div>
          <div className="--m-5 --m-pos">
            <img src="../../public/img/Menu/5.png" alt="" />
            <p>Акции</p>
          </div>
        </div>
        <div className="novelty">
          <p>
            Новинки <span>Популярное</span>
          </p>
        </div>
        <div className="d-flex">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              info={obj.info}
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>

        <div className="info">
          <h3>Заказать суши в Бишкеке</h3>
          <p>
            Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши
            с доставкой на дом, приготовленные по классическим и адаптированным
            к европейской аудитории рецептам, а также собственным наработкам
            наших поваров. Мы ценим время наших клиентов, поэтому вы можете
            заказать суши в Харькове с доставкой на дом или в офис.
          </p>
          <ul className="--i-p">
            В нашем меню более 20 видов суши:
            <li className="">Классические с сырым лососем, тунцом, окунем.</li>
            <li>Экзотические с тигровой креветкой, морским гребешком.</li>
            <li>Пикантные с копченым лососем, угрем.</li>
          </ul>
          <p>
            В меню также представлены гунканы: с начинкой из красной икры и
            тобико, а также феликсы, где японский майонез сочетается с рыбой,
            морепродуктами, угрем. Любители острых блюд могут купить суши с
            соусом спайси. Популярные начинки — копченая курица, снежный краб,
            креветки, гребешки, тунец, лосось и окунь.
          </p>
          <div className="--i-inf">
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
