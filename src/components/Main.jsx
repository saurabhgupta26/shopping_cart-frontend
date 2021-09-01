import React from "react";
import Data from "../assets/data/data.json";

// "id": 2,
//       "tagline": "200 Cash back",
//       "name": "Test 6X",
//       "price": 14000,
//       "imageUrl": "/images/phone.png",
//       "desc": "32GB Gold \n\n Extended Warranty",
//       "planLink": "http://pointstonothing.com/linktoplan",
//       "gift": {
//         "name": "Glory Selfie Stick",
//         "desc": "Silver Moon",
//         "price": 175
//       }

export default function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="offer_tag">
          <p>Shop for $5000 or more and get 10% discount on your order</p>
        </div>

        <h3 className="h1 heading"> Shopping cart </h3>
        <div className="container cart_background ">
          <div className="product_info w-100">
            <div className="d-flex justify-content-between">
              <p className="t_head h6">Product</p>

              <div className="t_content d-flex justify-content-evenly">
                <p className="h6 ">Price</p>
                <p className="h6 ">Quantity</p>
                <p className="h6 ">Subtotal</p>
              </div>
            </div>

            {Data["products"].map((product) => {
              return (
                <div className="product">
                  <h2>{product.name}</h2>
                  <img src={product.imageUrl} alt="img1" />
                  <p className="bg-dark text-white d-inline-block"> {product.tagline}</p>
                  <p>$ {product.price}</p>
                  {product.planLink ? (
                    <a href={product.planLink}> View Plans </a>
                  ) : (
                    <> </>
                  )}
                  <p>{product.desc}</p>
                  {product.gift ? (
                    <>
                      <h5 className="bg-dark text-white d-inline-block">GIFT</h5>
                      <img src={product.gift.imageUrl} alt="gift" />
                      <p className="text-primary"> {product.gift.name} </p>
                      <p className="text-primary"> {product.gift.desc} </p>
                      <p className="text-primary"> {product.gift.price} </p>
                    </>
                  ) : (
                    <> </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// /images/stick.png  for the earphones public link
