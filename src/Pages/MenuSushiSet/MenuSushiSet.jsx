import Card from "../../Components/Card/Card";
import axios from "axios";
import React from "react";

const MenuSushiSet = () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://65c3afef39055e7482c16929.mockapi.io/food")
      .then((res) => setItems(res.data));
  }, []);
  console.log("haha");
  return (
    <div className="container">
      <div className="wrapper sushiset-b">
        <div>
          <p></p>
        </div>
        <div className="c-wr">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              info={item.info}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSushiSet;
