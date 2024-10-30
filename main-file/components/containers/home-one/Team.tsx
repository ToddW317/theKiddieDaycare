"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/img/section-top-shape.png";
import two from "@/public/img/team/love.png";
import three from "@/public/img/team/frame.png";
import four from "@/public/img/team/team-shape.png";
import five from "@/public/img/team/01.jpg";
import six from "@/public/img/team/02.jpg";
import seven from "@/public/img/team/03.jpg";
import eight from "@/public/img/team/04.jpg";

const Team = () => {
  return (
    <section className="team-section fix section-bg section-padding" id="team">
      <div className="top-shape">
        <Image src={one} alt="shape-img" priority />
      </div>
      <div className="love-shape float-bob-x">
        <Image src={two} alt="shape-img" priority />
      </div>
      <div className="frame-shape">
        <Image src={three} alt="shape-img" priority />
      </div>
      <div className="container">
        <div className="section-title-area">
          <div className="section-title mt-60">
            <span data-aos-duration="800" data-aos="fade-up">
              Our Experts
            </span>
            <h2 data-aos-duration="800" data-aos="fade-up" data-aos-delay="300">
              Our Expert Instructors
            </h2>
          </div>
          <div
            className="array-button "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <button className="array-prev">
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
            speed={1500}
            loop={true}
            spaceBetween={30}
            roundLengths={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
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
                      <Image src={four} alt="img" priority />
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
                      <Image src={four} alt="img" priority />
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
                      <Image src={four} alt="img" priority />
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
                      <Image src={four} alt="img" priority />
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
                      <Image src={four} alt="img" priority />
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
                      <Image src={four} alt="img" priority />
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
                      <Image src={four} alt="img" priority />
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
                      <Image src={four} alt="img" priority />
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
                      <Link href="team-details">Kristin Watson</Link>
                    </h3>
                    <p>Instructors</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
