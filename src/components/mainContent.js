import React from "react";
import product_card from "../data/product_data";
import "../style/app.css";

const MainContent = () => {
  console.log(product_card);
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.img} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.currency}
          <span>{item.price}</span>
        </p>
        <div className="btn">Add to cart</div>
      </div>
    </div>
  ));

  return (
    <div className="main_content">
      <h3>Oleh Oleh</h3>
      {listItems}
    </div>
  );
};
export default MainContent;
