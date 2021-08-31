import React from "react";
import Data from "../assets/data/data.json";
import Header from "./Header";
import Footer from "./Footer";
// import Earphone from "../assets/images/Earphone.png"
// import Phone from "../assets/images/phone.png"
// import stick from "../assets/images/stick.png"

export default function Dashboard() {
  return (
    <div>
      <Header />

      {Data["products"].map((product) => {
          {console.log(product.imageUrl)}
        return (
          <>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt="img1" />
          </>
        );
      })}
    </div>
  );
}
