import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <a href="/">
        <Image
          src="/images/logo/applelogo.png"
          alt="logo"
          width={16}
          height={16}
        />
      </a>
      <a href="">Store</a>
      <a href="">Mac</a>
      <a href="">iPad</a>
      <a href="">iPhone</a>
      <a href="">Watch</a>
      <a href="">Vision</a>
      <a href="">AirPods</a>
      <a href="">TV & Home</a>
      <a href="">Entertainment</a>
      <a href="">Accessories</a>
      <a href="">Support</a>
      <a href="">
        <Image
          src={"/images/logo/search.png"}
          width={14}
          height={14}
          alt="search"
        />
      </a>
      <a href="">
        <Image
          src={"/images/logo/bag.png"}
          width={28}
          height={28}
          alt="search"
        />
      </a>
    </nav>
  );
};

export default NavBar;
