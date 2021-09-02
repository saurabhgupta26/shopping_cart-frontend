import React from "react";

export default function Hero() {
  return (
    <div className="shadow_box">
      <div className="container-1 d-flex justify-content-between align-items-start px-4">
        <div className="circle_display">
          <div className="circle">
            <div className="filled_circle"></div>
          </div>
          <p className="h7">SHOPPING CART</p>
        </div>
        <div className="h-divider"></div>
        <div className="circle_display">
          <div className="circle d_circle"></div>
          <p className="d_text h7">ORDER DETAILS</p>
        </div>
        <div className="h-divider d_circle"></div>
        <div className="circle_display">
          <div className="circle d_circle"></div>
          <p className="d_text h7">MAKE PAYMENT</p>
        </div>
      </div>
    </div>
  );
}
