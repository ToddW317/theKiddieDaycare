import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/cta/plane.png";
import two from "@/public/img/cta/pencil.png";
import three from "@/public/img/cta/cta-1.png";
import four from "@/public/img/cta/cta-shape.png";

const CTA = () => {
  return (
    <section
      className="cta-section fix section-padding bg-cover"
      style={{
        backgroundImage: "url(/img/cta/cta-bg.jpg)",
      }}
    >
      <div className="plane-shape">
        <Image src={one} alt="img" priority />
      </div>
      <div className="pencil-shape">
        <Image src={two} alt="img" priority />
      </div>
      <div className="container">
        <div className="cta-wrapper">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="section-title">
                <span
                  className="text-white "
                  data-aos-duration="800"
                  data-aos="fade-up"
                >
                  Get your quality
                </span>
                <h2
                  className="text-white "
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Come and be Part of <br /> Our Latest Session
                </h2>
              </div>
              <div
                className="cta-button mt-4 mt-md-0 "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Link href="contact" className="theme-btn bg-white">
                  Apply Now <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-5 "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="cta-image">
                <Image src={three} alt="cta-img" priority />
                <div className="cta-shape">
                  <Image src={four} alt="img" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
