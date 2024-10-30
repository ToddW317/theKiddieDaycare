import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/news/04.jpg";
import two from "@/public/img/news/05.jpg";
import three from "@/public/img/news/06.jpg";
import four from "@/public/img/news/08.jpg";
import five from "@/public/img/news/09.jpg";
import six from "@/public/img/news/10.jpg";

const NewsGrid = () => {
  return (
    <section className="news-section-3 fix section-padding">
      <div className="container">
        <div className="row g-4">
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="news-card-items mt-0">
              <div className="news-image">
                <Image src={one} alt="img" priority />
                <div className="news-layer-wrapper">
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/04.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/04.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/04.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/04.jpg)",
                    }}
                  ></div>
                </div>
                <div className="post">
                  <span>Activities</span>
                </div>
              </div>
              <div className="news-content">
                <ul>
                  <li>
                    <i className="fas fa-calendar-alt"></i>
                    Feb 10, 2024
                  </li>
                  <li>
                    <i className="far fa-user"></i>
                    By admin
                  </li>
                </ul>
                <h3>
                  <Link href="news-details">
                    From without content <br />
                    style without
                  </Link>
                </h3>
                <Link href="news-details" className="theme-btn-2 mt-3">
                  Read More <i className="fas fa-long-arrow-right"></i>
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
            <div className="news-card-items mt-0">
              <div className="news-image">
                <Image src={two} alt="img" priority />
                <div className="news-layer-wrapper">
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/05.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/05.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/05.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/05.jpg)",
                    }}
                  ></div>
                </div>
                <div className="post">
                  <span>Activities</span>
                </div>
              </div>
              <div className="news-content">
                <ul>
                  <li>
                    <i className="fas fa-calendar-alt"></i>
                    Feb 10, 2024
                  </li>
                  <li>
                    <i className="far fa-user"></i>
                    By admin
                  </li>
                </ul>
                <h3>
                  <Link href="news-details">
                    That jerk Form Finance <br />
                    really threw me
                  </Link>
                </h3>
                <Link href="news-details" className="theme-btn-2 mt-3">
                  Read More <i className="fas fa-long-arrow-right"></i>
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
            <div className="news-card-items mt-0">
              <div className="news-image">
                <Image src={three} alt="img" priority />
                <div className="news-layer-wrapper">
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/06.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/06.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/06.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/06.jpg)",
                    }}
                  ></div>
                </div>
                <div className="post">
                  <span>Activities</span>
                </div>
              </div>
              <div className="news-content">
                <ul>
                  <li>
                    <i className="fas fa-calendar-alt"></i>
                    Feb 10, 2024
                  </li>
                  <li>
                    <i className="far fa-user"></i>
                    By admin
                  </li>
                </ul>
                <h3>
                  <Link href="news-details">
                    All Inclusive Ultimate Circle <br /> Island Day with Lunch
                  </Link>
                </h3>
                <Link href="news-details" className="theme-btn-2 mt-3">
                  Read More <i className="fas fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="news-card-items mt-0">
              <div className="news-image">
                <Image src={four} alt="img" priority />
                <div className="news-layer-wrapper">
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/08.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/08.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/08.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/08.jpg)",
                    }}
                  ></div>
                </div>
                <div className="post">
                  <span>Activities</span>
                </div>
              </div>
              <div className="news-content">
                <ul>
                  <li>
                    <i className="fas fa-calendar-alt"></i>
                    Feb 10, 2024
                  </li>
                  <li>
                    <i className="far fa-user"></i>
                    By admin
                  </li>
                </ul>
                <h3>
                  <Link href="news-details">
                    That jerk Form Finance really threw me
                  </Link>
                </h3>
                <Link href="news-details" className="theme-btn-2 mt-3">
                  Read More <i className="fas fa-long-arrow-right"></i>
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
            <div className="news-card-items mt-0">
              <div className="news-image">
                <Image src={five} alt="img" priority />
                <div className="news-layer-wrapper">
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/09.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/09.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/09.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/09.jpg)",
                    }}
                  ></div>
                </div>
                <div className="post">
                  <span>Activities</span>
                </div>
              </div>
              <div className="news-content">
                <ul>
                  <li>
                    <i className="fas fa-calendar-alt"></i>
                    Feb 10, 2024
                  </li>
                  <li>
                    <i className="far fa-user"></i>
                    By admin
                  </li>
                </ul>
                <h3>
                  <Link href="news-details">
                    How to Keep Children Safe Online In Simple Steps
                  </Link>
                </h3>
                <Link href="news-details" className="theme-btn-2 mt-3">
                  Read More <i className="fas fa-long-arrow-right"></i>
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
            <div className="news-card-items mt-0">
              <div className="news-image">
                <Image src={six} alt="img" priority />
                <div className="news-layer-wrapper">
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/10.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/10.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/10.jpg)",
                    }}
                  ></div>
                  <div
                    className="news-layer-image"
                    style={{
                      backgroundImage: "url(/img/news/10.jpg)",
                    }}
                  ></div>
                </div>
                <div className="post">
                  <span>Activities</span>
                </div>
              </div>
              <div className="news-content">
                <ul>
                  <li>
                    <i className="fas fa-calendar-alt"></i>
                    Feb 10, 2024
                  </li>
                  <li>
                    <i className="far fa-user"></i>
                    By admin
                  </li>
                </ul>
                <h3>
                  <Link href="news-details">
                    Students Intelligence in Education Building Resilient
                  </Link>
                </h3>
                <Link href="news-details" className="theme-btn-2 mt-3">
                  Read More <i className="fas fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
