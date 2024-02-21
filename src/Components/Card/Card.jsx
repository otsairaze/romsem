import React from "react";

const Card = ({ title, info, price, imageUrl }) => {
  console.log(title, info);
  return (
    <div className="wrapper">
      <div className="novelty-block">
        <div className="--n-s">
          <img src={imageUrl} alt="" />
          <h3>{title}</h3>
          <p className="--n-p --n-p-1">{info}</p>
          <div className="d-flex align-center">
            <p>{price}</p>
            <button>Хочу</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
