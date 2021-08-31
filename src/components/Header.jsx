import React from "react";
import Logo from "../assets/media/logo.png";
import IconSearch from "../assets/icons/search.png";
import IconUser from "../assets/icons/user.png";
import IconCart from "../assets/icons/shopping.png";

export default function Header() {
  return (
    <div className="header ">
      <section className="header_display d-flex justify-content-between mb-2 align-items-center">
      <a href="##">  <img src={Logo} alt="img" /> </a>
        <div className="side_section d-flex justify-content-around align-items-center">
          <a href="##"><h4> Track Order </h4> </a>
          <p> | </p>
          <a href="##"><img src={IconSearch} alt="search" /> </a>
          <p> | </p>
          <a href="##"><img src={IconUser} alt="user" /> </a>
          <p> | </p>
          <a href="##"><img src={IconCart} alt="cart" /> </a>
        </div>
      </section>
    </div>
  );
}
