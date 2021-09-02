import React, { useEffect, useState } from "react";
import data from "../assets/data/data.json";
import IconP from "../assets/icons/plus.png";
import IconAM from "../assets/icons/minus-active.png";
import IconM from "../assets/icons/minus.png";
import Delete from "../assets/icons/DELETE.png";
import Location from "../assets/icons/LOCATION.png";
import Tick from "../assets/icons/check.png";

export default function Main() {
  const persistDataInLocalStorage = JSON.parse(
    localStorage.getItem("shoppingCart")
  );
  const [products, setProducts] = useState({});
  const [pincode, setPincode] = useState("560067");
  const [isValid, setIsValid] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [pinData, setPinData] = useState(null);

  useEffect(() => {
    const mappedProduct = data.products.reduce((acc, item) => {
      acc[item.id] = {
        ...item,
        qty: 0,
      };
      return acc;
    }, {});
    setProducts(persistDataInLocalStorage?.products ?? mappedProduct);
    setPinData(data.pincode["560067"]);
    setIsValid(persistDataInLocalStorage?.isValid ?? true);
    setSubTotal(persistDataInLocalStorage?.subTotal ?? 0);
    setDiscount(persistDataInLocalStorage?.discount ?? 0);
  }, []);

  useEffect(() => {
    persistState();
  }, [products, isValid, subTotal, discount, pinData]);

  useEffect(() => {
    setDiscount(
      subTotal > data.discount.minTotal
        ? (subTotal * data.discount.discountPercentage) / 100
        : 0
    );
  }, [subTotal]);

  const handlePincode = (e) => {
    e.preventDefault();
    if (pincode in data.pincode) {
      setIsValid(true);
      setPinData(data.pincode[pincode]);
    } else {
      setIsValid(false);
    }
  };

  const persistState = () => {
    localStorage.setItem(
      "shoppingCart",
      JSON.stringify({ products, isValid, subTotal, discount, pinData })
    );
  };

  const qtyIncHandler = (id) => {
    setProducts({
      ...products,
      [id]: { ...products[id], qty: products[id].qty + 1 },
    });
    setSubTotal(products[id].price + subTotal);
  };

  const qtyDecHandler = (id) => {
    if (!products[id].qty) return;
    setProducts({
      ...products,
      [id]: { ...products[id], qty: products[id].qty - 1 },
    });
    setSubTotal(subTotal - products[id].price);
  };

  const itemDeleteHandler = (id) => {
    const clonedProduct = { ...products };
    delete clonedProduct[id];
    setProducts(clonedProduct);
  };

  const noOfItems = () => {
    return Object.values(products).reduce((acc, item) => {
      if (item.qty) {
        return acc + item.qty;
      }
      return acc;
    }, 0);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="offer_tag">
          <p>Shop for $5000 or more and get 10% discount on your order</p>
        </div>

        <h3 className="h1 heading py-3 px-2"> Shopping Cart </h3>
        <div className="container cart_background ">
          <div className="product_info">
            <div className="d-flex justify-content-between my-3 bg-light py-3">
              <p className="t_head h6">Products</p>
              <div className="t_content d-flex justify-content-evenly">
                <p className="h6 ">Price</p>
                <p className="h6 ">Quantity</p>
                <p className="h6 ">Subtotal</p>
                <p></p>
              </div>
            </div>

            {Object.values(products).map((item) => {
              return (
                <div>
                  <div className="d-flex justify-content-between my-4">
                    <div className="product_data t_head d-flex align-items-center">
                      <img src={item.imageUrl} alt="img1" />
                      <div>
                        <p className="bg-dark text-white d-inline-block p-1">
                          {item.tagline}
                        </p>
                        <h2>{item.name}</h2>
                        <p>{item.desc}</p>
                        {item.planLink ? (
                          <a href={item.planLink} className="d-block">
                            View Plans
                          </a>
                        ) : (
                          <> </>
                        )}
                      </div>
                    </div>
                    <div className="t_content d-flex justify-content-evenly align-items-center">
                      <p>$ {item.price}</p>
                      <div className="quantity_update d-flex align-items-center">
                        <a onClick={() => qtyDecHandler(item.id)}>
                          {item.qty > 0 ? (
                            <img src={IconAM} alt="-" />
                          ) : (
                            <img src={IconM} alt="-" />
                          )}
                        </a>

                        <label className="bg-light p-2">{item.qty}</label>
                        <a onClick={() => qtyIncHandler(item.id)}>
                          <img src={IconP} alt="+" />
                        </a>
                      </div>
                      <p>{item.qty * item.price}</p>
                      <a onClick={() => itemDeleteHandler(item.id)}>
                        <img src={Delete} alt="del" />
                      </a>
                    </div>
                  </div>
                  {item.gift && item.qty > 0 ? (
                    <div className=" bg-light my-3 d-flex p-5 mx-5">
                      <img src={item.gift.imageUrl} alt="gift" />
                      <div>
                        <h5 className="bg-dark text-white d-inline-block">
                          GIFT
                        </h5>
                        <p className="text-primary"> {item.gift.name} </p>
                        <p className="text-primary"> {item.gift.desc} </p>
                        <p className="text-primary"> {item.gift.price} </p>
                      </div>
                    </div>
                  ) : (
                    <> </>
                    )}
                    <hr />
                </div>
              );
            }
            )
          }
          </div>

          {/* Main 2nd section */}
          <section className="order_summary">
            <div className="d-flex justify-content-between px-5">
              <div className="d-inline-block w-40">
                <div className="delivery_check">
                  <h4>Delivery Availability</h4>
                  {/* <div className="d-flex justify-content-between"> */}
                  <form
                    className="d-flex justify-content-between my-2"
                    onSubmit={handlePincode}
                  >
                    <img src={Location} alt="location" />
                    <input
                      type="text"
                      name="pincode"
                      id=""
                      placeholder="110003"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    <input
                      type="submit"
                      className="text-primary border-0 bg-transparent"
                      value="CHANGE"
                    />
                  </form>
                  {/* </div> */}
                  <hr />
                  <div className="delivery_option d-flex justify-content-between my-4">
                    {isValid ? (
                      <>
                        {" "}
                        <div className="d-flex justify-content-between">
                          {!pinData.deliveryPrice ? (
                            <img src={Tick} alt="tick" />
                          ) : (
                            <></>
                          )}

                          <p className="h7 w-100">Free delivery</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          {pinData.cashOnDelivery ? (
                            <img src={Tick} alt="tick" />
                          ) : (
                            <></>
                          )}
                          <p className="h7 w-100">Cash on delivery</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          {pinData.estimatedDays ? (
                            <img src={Tick} alt="tick" />
                          ) : (
                            <></>
                          )}
                          <p className="h7 w-100">
                            Estimated delivery time is{" "}
                            {pinData.estimatedDays.min} -{" "}
                            {pinData.estimatedDays.max} days
                          </p>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="main_total d-inline-block w-40">
                <h5 className="h5 bold">Order Summary ({noOfItems()} items)</h5>
                <div className="d-flex justify-content-between my-4">
                  <p>Subtotal</p>
                  <p> {subTotal} $</p>
                </div>
                <div className="d-flex justify-content-between my-4">
                  <p>Total Discount</p>
                  <p> {discount} $</p>
                </div>
                <div className="d-flex justify-content-between my-4">
                  <p>Standard Shipping</p>
                  <p>
                    {" "}
                    {pinData && pinData.deliveryPrice !== 0
                      ? pinData.deliveryPrice + " $"
                      : "Free"}{" "}
                  </p>
                </div>
                <div className="d-flex justify-content-between my-5">
                  <p>Order Total</p>
                  <p className="bolder text-dark h4">
                    {" "}
                    {subTotal -
                      discount +
                      (pinData && pinData.deliveryPrice
                        ? pinData.deliveryPrice
                        : 0)}{" "}
                    $
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <a href="##" className="text-primary bold">
                    CONTINUE SHOPPING
                  </a>
                  <button
                    className="btn btn-primary px-4 py-3 bold rounded-pill"
                    disabled={isValid && subTotal === 0}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(
                        "Your total is: " +
                          (subTotal -
                            discount +
                            (pinData && pinData.deliveryPrice
                              ? pinData.deliveryPrice
                              : 0) +
                            "$")
                      );
                    }}
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
