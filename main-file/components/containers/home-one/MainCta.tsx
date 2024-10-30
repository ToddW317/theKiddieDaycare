import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/plane.png";
import two from "@/public/img/cta/pencil-2.png";
import three from "@/public/img/cta/plane.png";
import four from "@/public/img/cta/shape.png";

const MainCta = () => {
  return (
    <section className="main-cta-section">
      <div className="plane-shape float-bob-y">
        <Image src={one} alt="shape-img" priority />
      </div>
      <div className="container">
        <div className="main-cta-wrapper section-padding">
          <div className="pencil-shape">
            <Image src={two} alt="img" priority />
          </div>
          <div className="plane-shape float-bob-y">
            <Image src={three} alt="img" priority />
          </div>
          <div className="cta-shape float-bob-x">
            <Image src={four} alt="img" priority />
          </div>
          <div className="cta-bg"></div>
          <div className="section-title text-center">
            <span
              className="text-white "
              data-aos-duration="800"
              data-aos="fade-up"
            >
              Newsletter
            </span>
            <h2
              className="text-white "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Subscribe to our newsletter <br /> for daily updates
            </h2>
          </div>
          <div className="newsletter-items">
            <div
              className="form-clt "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <button
              className="theme-btn "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="700"
              type="submit"
            >
              <span>Subscribe Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCta;
