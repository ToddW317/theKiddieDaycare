import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/breadcrumb-shape/line.png";
import two from "@/public/img/breadcrumb-shape/plane.png";
import three from "@/public/img/breadcrumb-shape/doll.png";
import four from "@/public/img/breadcrumb-shape/parasuit.png";
import five from "@/public/img/breadcrumb-shape/frame.png";
import six from "@/public/img/breadcrumb-shape/bee.png";

const CmnBanner = ({ title }: any) => {
  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{
        backgroundImage: "url(/img/breadcrumb.png)",
      }}
    >
      <div className="line-shape">
        <Image src={one} alt="shape-img" priority />
      </div>
      <div className="plane-shape float-bob-y">
        <Image src={two} alt="shape-img" priority />
      </div>
      <div className="doll-shape float-bob-x">
        <Image src={three} alt="shape-img" priority />
      </div>
      <div className="parasuit-shape float-bob-y">
        <Image src={four} alt="shape-img" priority />
      </div>
      <div className="frame-shape">
        <Image src={five} alt="shape-img" priority />
      </div>
      <div className="bee-shape float-bob-x">
        <Image src={six} alt="shape-img" priority />
      </div>
      <div className="container">
        <div className="page-heading">
          <h1 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
            {title}
          </h1>
          <ul
            className="breadcrumb-items "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CmnBanner;
