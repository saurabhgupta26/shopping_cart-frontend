import React from "react";
import Data from "../assets/data/data.json";

export default function Main() {
  return (
    <div className="main">
      <div className="container">
        <h3 className="h1 heading"> Shopping cart </h3>

        <div className="product_info">
          {Data["products"].map((product) => {
            return (
              <div className="product">
                <h2>{product.name}</h2>
                <img src={product.imageUrl} alt="img1" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
