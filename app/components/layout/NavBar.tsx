import Image from "next/image";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="navbar">
      <span>
        <Image src={"/images/navbar.png"} width={30} height={30} alt="logo" />
        <h1>Travler</h1>
      </span>
      <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>Info</li>
        <li>About</li>
      </ul>

      <span>search</span>
    </div>
  );
};

export default NavBar;
