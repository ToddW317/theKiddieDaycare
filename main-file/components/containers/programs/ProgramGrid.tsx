import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/classes/01.png";
import two from "@/public/img/classes/02.png";
import three from "@/public/img/classes/03.png";
import four from "@/public/img/classes/04.png";
import five from "@/public/img/classes/05.png";
import six from "@/public/img/classes/06.png";

const ProgramGrid = () => {
  return (
    <section className="clases-section section-padding">
      <div className="container">
        <div className="row g-4">
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="clases-items mt-0">
              <div className="clases-bg style-2"></div>
              <div className="clases-image">
                <Image src={one} alt="img" priority />
              </div>
              <div className="clases-content">
                <h4>
                  <Link href="program-details">English Classes</Link>
                </h4>
                <p>
                  Nulla a auctor leo. Vestibulum viverra mattis arcu <br /> nec
                  viverra. Vivamus{" "}
                </p>
                <ul className="clases-schedule">
                  <li>
                    <span>age</span> <br />
                    3-5 years
                  </li>
                  <li>
                    <span>weekly</span> <br />5 Days
                  </li>
                  <li>
                    <span>time</span> <br />
                    4.30 Hors
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="clases-items mt-0">
              <div className="clases-bg style-2"></div>
              <div className="clases-image">
                <Image src={two} alt="img" priority />
              </div>
              <div className="clases-content">
                <h4>
                  <Link href="program-details">Tutoring Individual</Link>
                </h4>
                <p>
                  Nulla a auctor leo. Vestibulum viverra mattis arcu <br /> nec
                  viverra. Vivamus{" "}
                </p>
                <ul className="clases-schedule">
                  <li>
                    <span>age</span> <br />
                    3-5 years
                  </li>
                  <li>
                    <span>weekly</span> <br />5 Days
                  </li>
                  <li>
                    <span>time</span> <br />
                    4.30 Hors
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="clases-items mt-0">
              <div className="clases-bg style-2"></div>
              <div className="clases-image">
                <Image src={three} alt="img" priority />
              </div>
              <div className="clases-content">
                <h4>
                  <Link href="program-details">Tutoring Online</Link>
                </h4>
                <p>
                  Nulla a auctor leo. Vestibulum viverra mattis arcu <br /> nec
                  viverra. Vivamus{" "}
                </p>
                <ul className="clases-schedule">
                  <li>
                    <span>age</span> <br />
                    3-5 years
                  </li>
                  <li>
                    <span>weekly</span> <br />5 Days
                  </li>
                  <li>
                    <span>time</span> <br />
                    4.30 Hors
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="clases-items mt-0">
              <div className="clases-bg style-2"></div>
              <div className="clases-image">
                <Image src={four} alt="img" priority />
              </div>
              <div className="clases-content">
                <h4>
                  <Link href="program-details">Art and Craft Classes</Link>
                </h4>
                <p>
                  Nulla a auctor leo. Vestibulum viverra mattis arcu <br /> nec
                  viverra. Vivamus{" "}
                </p>
                <ul className="clases-schedule">
                  <li>
                    <span>age</span> <br />
                    3-5 years
                  </li>
                  <li>
                    <span>weekly</span> <br />5 Days
                  </li>
                  <li>
                    <span>time</span> <br />
                    4.30 Hors
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="clases-items mt-0">
              <div className="clases-bg style-2"></div>
              <div className="clases-image">
                <Image src={five} alt="img" priority />
              </div>
              <div className="clases-content">
                <h4>
                  <Link href="program-details">Imagination Classes</Link>
                </h4>
                <p>
                  Nulla a auctor leo. Vestibulum viverra mattis arcu <br /> nec
                  viverra. Vivamus{" "}
                </p>
                <ul className="clases-schedule">
                  <li>
                    <span>age</span> <br />
                    3-5 years
                  </li>
                  <li>
                    <span>weekly</span> <br />5 Days
                  </li>
                  <li>
                    <span>time</span> <br />
                    4.30 Hors
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="clases-items mt-0">
              <div className="clases-bg style-2"></div>
              <div className="clases-image">
                <Image src={six} alt="img" priority />
              </div>
              <div className="clases-content">
                <h4>
                  <Link href="program-details">Wizards of Chess</Link>
                </h4>
                <p>
                  Nulla a auctor leo. Vestibulum viverra mattis arcu <br /> nec
                  viverra. Vivamus{" "}
                </p>
                <ul className="clases-schedule">
                  <li>
                    <span>age</span> <br />
                    3-5 years
                  </li>
                  <li>
                    <span>weekly</span> <br />5 Days
                  </li>
                  <li>
                    <span>time</span> <br />
                    4.30 Hors
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramGrid;
