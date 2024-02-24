import Card from "../../Components/Card/Card";

const MenuSushiSet = () => {
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
    {
      title: "Сет 6 Филадельфий",
      info: "1320 грамм 46 кусочек",
      price: "1700",
      imageUrl: "../../public/img/Novelty/4.png",
    },
    {
      title: "Топовый сет",
      info: "1020 грамм 40 кусочек",
      price: "1700",
      imageUrl: "../../public/img/Novelty/5.png",
    },
    {
      title: "Камикадзе сет",
      info: "1200 грамм 52 кусочек",
      price: "1700",
      imageUrl: "../../public/img/Novelty/6.png",
    },
    {
      title: "Сет 4 Филадельфии",
      info: "1100 грамм 32 кусочек",
      price: "1700",
      imageUrl: "../../public/img/Novelty/7.png",
    },
    {
      title: "Филадельфия LOVE сет",
      info: "1260 грамм 36 кусочек",
      price: "1700",
      imageUrl: "../../public/img/Novelty/8.png",
    },
    {
      title: "Якудза сет",
      info: "1270 грамм 50 кусочек",
      price: "1700",
      imageUrl: "../../public/img/Novelty/9.png",
    },
  ];
  return (
    <div className="container">
      <div className="wrapper sushiset-b">
        <div>
          <p></p>
        </div>
        <div className="c-wr">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              info={obj.info}
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSushiSet;
