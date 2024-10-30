import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/section-top-shape.png";
import two from "@/public/img/section-bottom-shape.png";
import three from "@/public/img/program/mask.png";
import four from "@/public/img/program/pencil.png";
import five from "@/public/img/program/mask-2.png";
import six from "@/public/img/program/compass.png";
import seven from "@/public/img/program/01.png";
import eight from "@/public/img/program/02.png";
import nine from "@/public/img/program/03.png";

const ProgramSection = () => {
  return (
    <section
      className="program-section section-padding section-bg-2 fix"
      id="programs"
    >
      <div className="top-shape">
        <Image src={one} alt="shape-img" priority />
      </div>
      <div className="bottom-shape">
        <Image src={two} alt="shape-img" priority />
      </div>
      <div className="mask-shape float-bob-x">
        <Image src={three} alt="shape-img" priority />
      </div>
      <div className="pencil-shape">
        <Image src={four} alt="shape-img" priority />
      </div>
      <div className="mask-shape-2">
        <Image src={five} alt="shape-img" priority />
      </div>
      <div className="compass-shape">
        <Image src={six} alt="shape-img" priority />
      </div>
      <div className="container">
        <div className="section-title text-center mt-60">
          <span data-aos-duration="800" data-aos="fade-up">
            Our Programs
          </span>
          <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
            We meet kids at their level <br /> regardless of their age
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="program-box-items">
              <div className="program-bg"></div>
              <div className="program-image">
                <Image src={seven} alt="img" priority />
              </div>
              <div className="program-content text-center">
                <h4>
                  <Link href="program-details">Kindergarten</Link>
                </h4>
                <span>(4-5 years)</span>
                <p>
                  Lorem ipsum dolor consectur the <br /> adipiscing elit
                  eiusmod.
                </p>
                <Link href="program-details" className="arrow-icon">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="program-box-items">
              <div className="program-bg bg-2"></div>
              <div className="program-image">
                <Image src={eight} alt="img" priority />
              </div>
              <div className="program-content text-center">
                <h4>
                  <Link href="program-details">Chemistry Class</Link>
                </h4>
                <span>(1-2 years)</span>
                <p>
                  Lorem ipsum dolor consectur the <br /> adipiscing elit
                  eiusmod.
                </p>
                <Link href="program-details" className="arrow-icon color-2">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="program-box-items">
              <div className="program-bg bg-3"></div>
              <div className="program-image">
                <Image src={nine} alt="img" priority />
              </div>
              <div className="program-content text-center style-2">
                <h4>
                  <Link href="program-details">Drawing Class</Link>
                </h4>
                <span>(1-2 years)</span>
                <p>
                  Lorem ipsum dolor consectur the <br /> adipiscing elit
                  eiusmod.
                </p>
                <Link href="program-details" className="arrow-icon">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
