import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/team/team-shape.png";
import two from "@/public/img/team/01.jpg";
import three from "@/public/img/team/02.jpg";
import four from "@/public/img/team/03.jpg";
import five from "@/public/img/team/04.jpg";
import six from "@/public/img/team/05.jpg";
import seven from "@/public/img/team/06.jpg";
import eight from "@/public/img/team/07.jpg";
import nine from "@/public/img/team/08.jpg";

const OurTeacher = () => {
  return (
    <section className="team-section-4 fix section-padding">
      <div className="container">
        <div className="row g-4">
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="team-items mt-0">
              <div className="team-image">
                <div className="shape-img">
                  <Image src={one} alt="img" priority />
                </div>
                <Image src={two} alt="team-img" priority />
                <div className="social-profile">
                  <span className="plus-btn">
                    <i className="fas fa-share-alt"></i>
                  </span>
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h3>
                  <Link href="team-details">Brooklyn Simmons</Link>
                </h3>
                <p>Instructors</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="team-items mt-0">
              <div className="team-image">
                <div className="shape-img">
                  <Image src={one} alt="img" priority />
                </div>
                <Image src={three} alt="team-img" priority />
                <div className="social-profile">
                  <span className="plus-btn">
                    <i className="fas fa-share-alt"></i>
                  </span>
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h3>
                  <Link href="team-details">Leslie Alexander</Link>
                </h3>
                <p>Instructors</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="team-items mt-0">
              <div className="team-image">
                <div className="shape-img">
                  <Image src={one} alt="img" priority />
                </div>
                <Image src={four} alt="team-img" priority />
                <div className="social-profile">
                  <span className="plus-btn">
                    <i className="fas fa-share-alt"></i>
                  </span>
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h3>
                  <Link href="team-details">Ronald Richards</Link>
                </h3>
                <p>Instructors</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="team-items mt-0">
              <div className="team-image">
                <div className="shape-img">
                  <Image src={one} alt="img" priority />
                </div>
                <Image src={five} alt="team-img" priority />
                <div className="social-profile">
                  <span className="plus-btn">
                    <i className="fas fa-share-alt"></i>
                  </span>
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h3>
                  <Link href="team-details">Kristin Watson</Link>
                </h3>
                <p>Instructors</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="team-items mt-0">
              <div className="team-image">
                <div className="shape-img">
                  <Image src={one} alt="img" priority />
                </div>
                <Image src={six} alt="team-img" priority />
                <div className="social-profile">
                  <span className="plus-btn">
                    <i className="fas fa-share-alt"></i>
                  </span>
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h3>
                  <Link href="team-details">Esther Howard</Link>
                </h3>
                <p>Instructors</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="team-items mt-0">
              <div className="team-image">
                <div className="shape-img">
                  <Image src={one} alt="img" priority />
                </div>
                <Image src={seven} alt="team-img" priority />
                <div className="social-profile">
                  <span className="plus-btn">
                    <i className="fas fa-share-alt"></i>
                  </span>
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h3>
                  <Link href="team-details">Savannah Nguyen</Link>
                </h3>
                <p>Instructors</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="team-items mt-0">
              <div className="team-image">
                <div className="shape-img">
                  <Image src={one} alt="img" priority />
                </div>
                <Image src={eight} alt="team-img" priority />
                <div className="social-profile">
                  <span className="plus-btn">
                    <i className="fas fa-share-alt"></i>
                  </span>
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h3>
                  <Link href="team-details">Dianne Russell</Link>
                </h3>
                <p>Instructors</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="team-items mt-0">
              <div className="team-image">
                <div className="shape-img">
                  <Image src={one} alt="img" priority />
                </div>
                <Image src={nine} alt="team-img" priority />
                <div className="social-profile">
                  <span className="plus-btn">
                    <i className="fas fa-share-alt"></i>
                  </span>
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-content">
                <h3>
                  <Link href="team-details">Kathryn Murphy</Link>
                </h3>
                <p>Instructors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeacher;
