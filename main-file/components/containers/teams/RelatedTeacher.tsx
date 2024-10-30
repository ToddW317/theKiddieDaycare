"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/img/team/team-shape.png";
import two from "@/public/img/team/01.jpg";
import three from "@/public/img/team/02.jpg";
import four from "@/public/img/team/03.jpg";
import five from "@/public/img/team/04.jpg";
import six from "@/public/img/team/05.jpg";
import seven from "@/public/img/team/06.jpg";
import eight from "@/public/img/team/07.jpg";
import nine from "@/public/img/team/08.jpg";

const RelatedTeacher = () => {
  return (
    <section className="team-section-4 fix section-padding pt-80">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h2
              className="fz-40 "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Related Teacher
            </h2>
          </div>
          <div
            className="array-button "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <button className="array-prev border-array-style">
              <i className="fal fa-arrow-left"></i>
            </button>
            <button className="array-next">
              <i className="fal fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="swiper team-slider">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            freeMode={true}
            speed={1300}
            loop={true}
            spaceBetween={30}
            roundLengths={true}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: ".dot",
              clickable: true,
            }}
            navigation={{
              nextEl: ".array-next",
              prevEl: ".array-prev",
            }}
            breakpoints={{
              1299: {
                slidesPerView: 4,
              },
              1199: {
                slidesPerView: 3,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 2,
              },
            }}
            className="swiper-wrapper"
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-items">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-items">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-items">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-items">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-items">
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
                      <Link href="team-details">Brooklyn Simmons</Link>
                    </h3>
                    <p>Instructors</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-items">
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
                      <Link href="team-details">Leslie Alexander</Link>
                    </h3>
                    <p>Instructors</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-items">
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
                      <Link href="team-details">Ronald Richards</Link>
                    </h3>
                    <p>Instructors</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="team-items">
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
                      <Link href="team-details">Kristin Watson</Link>
                    </h3>
                    <p>Instructors</p>
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

export default RelatedTeacher;
