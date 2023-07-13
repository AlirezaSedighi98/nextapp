import React from "react";

interface IProps {
  title: string;
  desc: string;
  backgroundUrl: string;
  bgDark?: boolean;
}

const Catalog = ({ title, desc, backgroundUrl, bgDark }: IProps) => {
  const textColor: "white" | "unset" = bgDark ? "white" : "unset";

  return (
    <div
      className="catalog"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <span>
        <h1 style={{ color: textColor }}>{title}</h1>
        <h3 style={{ color: textColor }}>{desc}</h3>
        <div>
          <a href="">Learn More</a>
          <a href="">Buy</a>
        </div>
      </span>
    </div>
  );
};

export default Catalog;
