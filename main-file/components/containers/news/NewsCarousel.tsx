"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/img/news/04.jpg";
import two from "@/public/img/news/05.jpg";
import three from "@/public/img/news/06.jpg";
import four from "@/public/img/news/08.jpg";
import five from "@/public/img/news/09.jpg";
import six from "@/public/img/news/10.jpg";

const NewsCarousel = () => {
  return (
    <section className="news-section-3 fix section-padding">
      <div className="container">
        <div className="swiper news-slider">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            freeMode={true}
            speed={1300}
            loop={true}
            spaceBetween={30}
            roundLengths={true}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: ".dot",
              clickable: true,
            }}
            breakpoints={{
              1199: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 2,
              },
            }}
            className="swiper-wrapper"
          >
            <SwiperSlide>
              <div className="swiper-slide">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
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
                        All Inclusive Ultimate Circle <br /> Island Day with
                        Lunch
                      </Link>
                    </h3>
                    <Link href="news-details" className="theme-btn-2 mt-3">
                      Read More <i className="fas fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
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
            </SwiperSlide>
          </Swiper>
          <div className="swiper-dot text-center pt-5">
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
