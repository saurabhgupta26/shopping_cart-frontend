import React from "react";
import Phone from "../assets/icons/phone.png";

export default function Footer() {
  return (
    <div className="footer_background">
      <div className="container d-flex justify-content-around footer_background p-3">
        <div className="text-white">
          <p className="h5">LOREM</p>
          <p className="h7 pt-1 pb-1">Dummy</p>
          <p className="h7 pt-1 pb-1">Dummy</p>
          <p className="h7 pt-1 pb-1">Dummy</p>
          <p className="h7 pt-1 pb-1">Dummy</p>
          <p className="h7 pt-1 pb-1">Dummy</p>
        </div>

        <div className="text-white">
          <p className="h5">LOREM</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
        </div>

        <div className="text-white">
          <p className="h5">LOREM</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
          <p className="h7 pt-1 pb-1">Dummy Text</p>
        </div>

        <div className="text-white">
          <p className="h5">LOREM</p>
          <p className="h7 pt-1 pb-1">Dummy</p>
          <p className="h7 pt-1 pb-1">Dummy</p>
          <p className="h7 pt-1 pb-1">Dummy</p>
          <p className="h7 pt-1 pb-1">Dummy</p>
          <p className="h7 pt-1 pb-1">Dummy</p>
          <p className="h7 pt-1 pb-1">Dummy</p>
          <p className="h7 pt-1 pb-1">Dummy</p>
        </div>

        <div className="divider"></div>

        <div className="text-white px-3">
          <p className="h5">CALL US</p>
          <div className="d-flex justify-content-between flex-wrap foot_timing">
            <p className="h7">
              Monday - Friday <br /> 8am to 9pm CST
            </p>
            <p className="h7">
              Saturday - Sunday <br /> 10am to 6am CST
            </p>
          </div>
          <div className="d-flex justify-content-start foot_phone">
            <img src={Phone} alt="phone" />
            <h4>1800-123-1234</h4>
          </div>

          <div className="border border-top-2 border-white"></div>

          <h4 className="email h4 text-center">support.us@test.com</h4>
        </div>
      </div>
      <div className="container footer_end">
        <div className="border border-top-2 border-white text-right"></div>
        <div className="footer_end d-flex justify-content-end">
          <h6>Dummy</h6>
          <p></p>
          <h6>Dummy</h6>
          <p></p>
          <h6>Dummy</h6>
          <p></p>
          <h6>Dummy</h6>
        </div>
        <h6 className="footer_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta?
        </h6>
      </div>
    </div>
  );
}
