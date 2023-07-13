import Catalog from "./components/layout/Catalog";
import macImg from "@/public/images/mac.jpg";
import iPadImg from "@/public/images/ipad.jpg";
import iPhoneImg from "@/public/images/iphone14Pc.jpg";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  const catalogItems: {
    title: string;
    desc: string;
    backgroundUrl: string;
    bgDark?: boolean;
  }[] = [
    {
      title: 'MacBook Air 15"',
      desc: "Impressively big. Impossibly thin.",
      backgroundUrl: macImg.src,
    },
    {
      title: "Save on Mac or iPad for college.",
      desc: "Plus get a gift card up to $150.",
      backgroundUrl: iPadImg.src,
    },
    {
      title: "iPhone 14 Pro",
      desc: "Pro. Beyond.",
      backgroundUrl: iPhoneImg.src,
      bgDark: true,
    },
  ];

  return (
    <div>
      <Navbar />
      {catalogItems.map((item, index) => (
        <Catalog
          backgroundUrl={item.backgroundUrl}
          title={item.title}
          desc={item.desc}
          bgDark={item.bgDark}
          key={index}
        />
      ))}
    </div>
  );
}
