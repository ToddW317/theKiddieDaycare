import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/404.png";

const ErrorSection = () => {
  return (
    <section className="Error-section section-padding fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="error-items">
              <div className="error-image">
                <Image src={one} alt="img" priority />
              </div>
              <h2>
                Whoops! This Page got Lost <br />
                in converstion
              </h2>
              <Link
                href="/"
                className="theme-btn "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Go Back Home
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
