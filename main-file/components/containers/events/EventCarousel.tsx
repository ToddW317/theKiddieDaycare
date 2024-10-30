"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/img/event/01.jpg";
import two from "@/public/img/event/shape.png";
import three from "@/public/img/event/calender.svg";
import four from "@/public/img/event/02.jpg";
import five from "@/public/img/event/03.jpg";
import six from "@/public/img/event/04.jpg";
import seven from "@/public/img/event/05.jpg";
import eight from "@/public/img/event/06.jpg";

const EventCarousel = () => {
  return (
    <section className="event-section-2 fix section-padding">
      <div className="container">
        <div className="swiper event-slider">
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
                <div className="event-box-items mt-0 box-shadow style-bottom">
                  <div className="event-image">
                    <Image src={one} alt="event-img" priority />
                    <div className="event-shape">
                      <Image src={two} alt="shape-img" priority />
                    </div>
                    <ul className="post-date">
                      <li>
                        <Image
                          src={three}
                          alt="img"
                          className="me-2"
                          priority
                        />
                        Jan 16, 2024
                      </li>
                    </ul>
                  </div>
                  <div className="event-content">
                    <ul>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M12.7847 1.98206C11.5066 0.703906 9.80717 0 7.99961 0C6.19205 0 4.49261 0.703906 3.21448 1.98206C1.93633 3.26025 1.23242 4.95962 1.23242 6.76716C1.23242 10.4238 4.68986 13.4652 6.54733 15.0991C6.80545 15.3262 7.02836 15.5223 7.20595 15.6882C7.42845 15.896 7.71405 15.9999 7.99958 15.9999C8.28517 15.9999 8.5707 15.896 8.79324 15.6882C8.97083 15.5223 9.19374 15.3262 9.45186 15.0991C11.3093 13.4652 14.7668 10.4238 14.7668 6.76716C14.7667 4.95962 14.0629 3.26025 12.7847 1.98206ZM8.8328 14.3954C8.56902 14.6275 8.34124 14.8279 8.15342 15.0033C8.06714 15.0838 7.93202 15.0838 7.8457 15.0033C7.65792 14.8278 7.43011 14.6274 7.16633 14.3954C5.42008 12.8593 2.16961 9.99997 2.16961 6.76719C2.16961 3.55256 4.78489 0.937281 7.99955 0.937281C11.2142 0.937281 13.8295 3.55256 13.8295 6.76719C13.8295 9.99997 10.579 12.8593 8.8328 14.3954Z"
                            fill="#F39F5F"
                          />
                          <path
                            d="M7.9998 3.5293C6.35539 3.5293 5.01758 4.86708 5.01758 6.51148C5.01758 8.15589 6.35539 9.49367 7.9998 9.49367C9.6442 9.49367 10.982 8.15589 10.982 6.51148C10.982 4.86708 9.6442 3.5293 7.9998 3.5293ZM7.9998 8.55639C6.8722 8.55639 5.95483 7.63902 5.95483 6.51145C5.95483 5.38389 6.8722 4.46652 7.9998 4.46652C9.12739 4.46652 10.0447 5.38389 10.0447 6.51145C10.0447 7.63902 9.12739 8.55639 7.9998 8.55639Z"
                            fill="#F39F5F"
                          />
                        </svg>
                        <span>6391 Elgin St. Celina, USA</span>
                      </li>
                    </ul>
                    <h3>
                      <Link href="event-details">
                        Last Day of School end of Year Picnic
                      </Link>
                    </h3>
                    <div className="event-author">
                      <Link href="event-details" className="theme-btn">
                        Get Ticket{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                      <div className="author-ratting">
                        <span>(10 Review)</span>
                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star color-1"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="event-box-items mt-0 box-shadow style-bottom">
                  <div className="event-image">
                    <Image src={four} alt="event-img" priority />
                    <div className="event-shape">
                      <Image src={two} alt="shape-img" priority />
                    </div>
                    <ul className="post-date">
                      <li>
                        <Image
                          src={three}
                          alt="img"
                          className="me-2"
                          priority
                        />
                        Feb 20, 2024
                      </li>
                    </ul>
                  </div>
                  <div className="event-content">
                    <ul>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M12.7847 1.98206C11.5066 0.703906 9.80717 0 7.99961 0C6.19205 0 4.49261 0.703906 3.21448 1.98206C1.93633 3.26025 1.23242 4.95962 1.23242 6.76716C1.23242 10.4238 4.68986 13.4652 6.54733 15.0991C6.80545 15.3262 7.02836 15.5223 7.20595 15.6882C7.42845 15.896 7.71405 15.9999 7.99958 15.9999C8.28517 15.9999 8.5707 15.896 8.79324 15.6882C8.97083 15.5223 9.19374 15.3262 9.45186 15.0991C11.3093 13.4652 14.7668 10.4238 14.7668 6.76716C14.7667 4.95962 14.0629 3.26025 12.7847 1.98206ZM8.8328 14.3954C8.56902 14.6275 8.34124 14.8279 8.15342 15.0033C8.06714 15.0838 7.93202 15.0838 7.8457 15.0033C7.65792 14.8278 7.43011 14.6274 7.16633 14.3954C5.42008 12.8593 2.16961 9.99997 2.16961 6.76719C2.16961 3.55256 4.78489 0.937281 7.99955 0.937281C11.2142 0.937281 13.8295 3.55256 13.8295 6.76719C13.8295 9.99997 10.579 12.8593 8.8328 14.3954Z"
                            fill="#F39F5F"
                          />
                          <path
                            d="M7.9998 3.5293C6.35539 3.5293 5.01758 4.86708 5.01758 6.51148C5.01758 8.15589 6.35539 9.49367 7.9998 9.49367C9.6442 9.49367 10.982 8.15589 10.982 6.51148C10.982 4.86708 9.6442 3.5293 7.9998 3.5293ZM7.9998 8.55639C6.8722 8.55639 5.95483 7.63902 5.95483 6.51145C5.95483 5.38389 6.8722 4.46652 7.9998 4.46652C9.12739 4.46652 10.0447 5.38389 10.0447 6.51145C10.0447 7.63902 9.12739 8.55639 7.9998 8.55639Z"
                            fill="#F39F5F"
                          />
                        </svg>
                        <span>6391 Elgin St. Celina, USA</span>
                      </li>
                    </ul>
                    <h3>
                      <Link href="event-details">
                        The complete web developer guideline 2024
                      </Link>
                    </h3>
                    <div className="event-author">
                      <Link href="event-details" className="theme-btn">
                        Get Ticket{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                      <div className="author-ratting">
                        <span>(10 Review)</span>
                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star color-1"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="event-box-items mt-0 box-shadow style-bottom">
                  <div className="event-image">
                    <Image src={five} alt="event-img" priority />
                    <div className="event-shape">
                      <Image src={two} alt="shape-img" priority />
                    </div>
                    <ul className="post-date">
                      <li>
                        <Image
                          src={three}
                          alt="img"
                          className="me-2"
                          priority
                        />
                        Mar 26, 2024
                      </li>
                    </ul>
                  </div>
                  <div className="event-content">
                    <ul>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M12.7847 1.98206C11.5066 0.703906 9.80717 0 7.99961 0C6.19205 0 4.49261 0.703906 3.21448 1.98206C1.93633 3.26025 1.23242 4.95962 1.23242 6.76716C1.23242 10.4238 4.68986 13.4652 6.54733 15.0991C6.80545 15.3262 7.02836 15.5223 7.20595 15.6882C7.42845 15.896 7.71405 15.9999 7.99958 15.9999C8.28517 15.9999 8.5707 15.896 8.79324 15.6882C8.97083 15.5223 9.19374 15.3262 9.45186 15.0991C11.3093 13.4652 14.7668 10.4238 14.7668 6.76716C14.7667 4.95962 14.0629 3.26025 12.7847 1.98206ZM8.8328 14.3954C8.56902 14.6275 8.34124 14.8279 8.15342 15.0033C8.06714 15.0838 7.93202 15.0838 7.8457 15.0033C7.65792 14.8278 7.43011 14.6274 7.16633 14.3954C5.42008 12.8593 2.16961 9.99997 2.16961 6.76719C2.16961 3.55256 4.78489 0.937281 7.99955 0.937281C11.2142 0.937281 13.8295 3.55256 13.8295 6.76719C13.8295 9.99997 10.579 12.8593 8.8328 14.3954Z"
                            fill="#F39F5F"
                          />
                          <path
                            d="M7.9998 3.5293C6.35539 3.5293 5.01758 4.86708 5.01758 6.51148C5.01758 8.15589 6.35539 9.49367 7.9998 9.49367C9.6442 9.49367 10.982 8.15589 10.982 6.51148C10.982 4.86708 9.6442 3.5293 7.9998 3.5293ZM7.9998 8.55639C6.8722 8.55639 5.95483 7.63902 5.95483 6.51145C5.95483 5.38389 6.8722 4.46652 7.9998 4.46652C9.12739 4.46652 10.0447 5.38389 10.0447 6.51145C10.0447 7.63902 9.12739 8.55639 7.9998 8.55639Z"
                            fill="#F39F5F"
                          />
                        </svg>
                        <span>6391 Elgin St. Celina, USA</span>
                      </li>
                    </ul>
                    <h3>
                      <Link href="event-details">
                        Gathering & welcome speech marketing strategy
                      </Link>
                    </h3>
                    <div className="event-author">
                      <Link href="event-details" className="theme-btn">
                        Get Ticket{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                      <div className="author-ratting">
                        <span>(10 Review)</span>
                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star color-1"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="event-box-items mt-0 box-shadow style-bottom">
                  <div className="event-image">
                    <Image src={six} alt="event-img" priority />
                    <div className="event-shape">
                      <Image src={two} alt="shape-img" priority />
                    </div>
                    <ul className="post-date">
                      <li>
                        <Image
                          src={three}
                          alt="img"
                          className="me-2"
                          priority
                        />
                        Jan 16, 2024
                      </li>
                    </ul>
                  </div>
                  <div className="event-content">
                    <ul>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M12.7847 1.98206C11.5066 0.703906 9.80717 0 7.99961 0C6.19205 0 4.49261 0.703906 3.21448 1.98206C1.93633 3.26025 1.23242 4.95962 1.23242 6.76716C1.23242 10.4238 4.68986 13.4652 6.54733 15.0991C6.80545 15.3262 7.02836 15.5223 7.20595 15.6882C7.42845 15.896 7.71405 15.9999 7.99958 15.9999C8.28517 15.9999 8.5707 15.896 8.79324 15.6882C8.97083 15.5223 9.19374 15.3262 9.45186 15.0991C11.3093 13.4652 14.7668 10.4238 14.7668 6.76716C14.7667 4.95962 14.0629 3.26025 12.7847 1.98206ZM8.8328 14.3954C8.56902 14.6275 8.34124 14.8279 8.15342 15.0033C8.06714 15.0838 7.93202 15.0838 7.8457 15.0033C7.65792 14.8278 7.43011 14.6274 7.16633 14.3954C5.42008 12.8593 2.16961 9.99997 2.16961 6.76719C2.16961 3.55256 4.78489 0.937281 7.99955 0.937281C11.2142 0.937281 13.8295 3.55256 13.8295 6.76719C13.8295 9.99997 10.579 12.8593 8.8328 14.3954Z"
                            fill="#F39F5F"
                          />
                          <path
                            d="M7.9998 3.5293C6.35539 3.5293 5.01758 4.86708 5.01758 6.51148C5.01758 8.15589 6.35539 9.49367 7.9998 9.49367C9.6442 9.49367 10.982 8.15589 10.982 6.51148C10.982 4.86708 9.6442 3.5293 7.9998 3.5293ZM7.9998 8.55639C6.8722 8.55639 5.95483 7.63902 5.95483 6.51145C5.95483 5.38389 6.8722 4.46652 7.9998 4.46652C9.12739 4.46652 10.0447 5.38389 10.0447 6.51145C10.0447 7.63902 9.12739 8.55639 7.9998 8.55639Z"
                            fill="#F39F5F"
                          />
                        </svg>
                        <span>6391 Elgin St. Celina, USA</span>
                      </li>
                    </ul>
                    <h3>
                      <Link href="event-details">
                        Last Day of School end of Year Picnic
                      </Link>
                    </h3>
                    <div className="event-author">
                      <Link href="event-details" className="theme-btn">
                        Get Ticket{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                      <div className="author-ratting">
                        <span>(10 Review)</span>
                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star color-1"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="event-box-items mt-0 box-shadow style-bottom">
                  <div className="event-image">
                    <Image src={seven} alt="event-img" priority />
                    <div className="event-shape">
                      <Image src={two} alt="shape-img" priority />
                    </div>
                    <ul className="post-date">
                      <li>
                        <Image
                          src={three}
                          alt="img"
                          className="me-2"
                          priority
                        />
                        Feb 20, 2024
                      </li>
                    </ul>
                  </div>
                  <div className="event-content">
                    <ul>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M12.7847 1.98206C11.5066 0.703906 9.80717 0 7.99961 0C6.19205 0 4.49261 0.703906 3.21448 1.98206C1.93633 3.26025 1.23242 4.95962 1.23242 6.76716C1.23242 10.4238 4.68986 13.4652 6.54733 15.0991C6.80545 15.3262 7.02836 15.5223 7.20595 15.6882C7.42845 15.896 7.71405 15.9999 7.99958 15.9999C8.28517 15.9999 8.5707 15.896 8.79324 15.6882C8.97083 15.5223 9.19374 15.3262 9.45186 15.0991C11.3093 13.4652 14.7668 10.4238 14.7668 6.76716C14.7667 4.95962 14.0629 3.26025 12.7847 1.98206ZM8.8328 14.3954C8.56902 14.6275 8.34124 14.8279 8.15342 15.0033C8.06714 15.0838 7.93202 15.0838 7.8457 15.0033C7.65792 14.8278 7.43011 14.6274 7.16633 14.3954C5.42008 12.8593 2.16961 9.99997 2.16961 6.76719C2.16961 3.55256 4.78489 0.937281 7.99955 0.937281C11.2142 0.937281 13.8295 3.55256 13.8295 6.76719C13.8295 9.99997 10.579 12.8593 8.8328 14.3954Z"
                            fill="#F39F5F"
                          />
                          <path
                            d="M7.9998 3.5293C6.35539 3.5293 5.01758 4.86708 5.01758 6.51148C5.01758 8.15589 6.35539 9.49367 7.9998 9.49367C9.6442 9.49367 10.982 8.15589 10.982 6.51148C10.982 4.86708 9.6442 3.5293 7.9998 3.5293ZM7.9998 8.55639C6.8722 8.55639 5.95483 7.63902 5.95483 6.51145C5.95483 5.38389 6.8722 4.46652 7.9998 4.46652C9.12739 4.46652 10.0447 5.38389 10.0447 6.51145C10.0447 7.63902 9.12739 8.55639 7.9998 8.55639Z"
                            fill="#F39F5F"
                          />
                        </svg>
                        <span>6391 Elgin St. Celina, USA</span>
                      </li>
                    </ul>
                    <h3>
                      <Link href="event-details">
                        The complete web developer guideline 2024
                      </Link>
                    </h3>
                    <div className="event-author">
                      <Link href="event-details" className="theme-btn">
                        Get Ticket{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                      <div className="author-ratting">
                        <span>(10 Review)</span>
                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star color-1"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="event-box-items mt-0 box-shadow style-bottom">
                  <div className="event-image">
                    <Image src={eight} alt="event-img" priority />
                    <div className="event-shape">
                      <Image src={two} alt="shape-img" priority />
                    </div>
                    <ul className="post-date">
                      <li>
                        <Image
                          src={three}
                          alt="img"
                          className="me-2"
                          priority
                        />
                        Mar 26, 2024
                      </li>
                    </ul>
                  </div>
                  <div className="event-content">
                    <ul>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M12.7847 1.98206C11.5066 0.703906 9.80717 0 7.99961 0C6.19205 0 4.49261 0.703906 3.21448 1.98206C1.93633 3.26025 1.23242 4.95962 1.23242 6.76716C1.23242 10.4238 4.68986 13.4652 6.54733 15.0991C6.80545 15.3262 7.02836 15.5223 7.20595 15.6882C7.42845 15.896 7.71405 15.9999 7.99958 15.9999C8.28517 15.9999 8.5707 15.896 8.79324 15.6882C8.97083 15.5223 9.19374 15.3262 9.45186 15.0991C11.3093 13.4652 14.7668 10.4238 14.7668 6.76716C14.7667 4.95962 14.0629 3.26025 12.7847 1.98206ZM8.8328 14.3954C8.56902 14.6275 8.34124 14.8279 8.15342 15.0033C8.06714 15.0838 7.93202 15.0838 7.8457 15.0033C7.65792 14.8278 7.43011 14.6274 7.16633 14.3954C5.42008 12.8593 2.16961 9.99997 2.16961 6.76719C2.16961 3.55256 4.78489 0.937281 7.99955 0.937281C11.2142 0.937281 13.8295 3.55256 13.8295 6.76719C13.8295 9.99997 10.579 12.8593 8.8328 14.3954Z"
                            fill="#F39F5F"
                          />
                          <path
                            d="M7.9998 3.5293C6.35539 3.5293 5.01758 4.86708 5.01758 6.51148C5.01758 8.15589 6.35539 9.49367 7.9998 9.49367C9.6442 9.49367 10.982 8.15589 10.982 6.51148C10.982 4.86708 9.6442 3.5293 7.9998 3.5293ZM7.9998 8.55639C6.8722 8.55639 5.95483 7.63902 5.95483 6.51145C5.95483 5.38389 6.8722 4.46652 7.9998 4.46652C9.12739 4.46652 10.0447 5.38389 10.0447 6.51145C10.0447 7.63902 9.12739 8.55639 7.9998 8.55639Z"
                            fill="#F39F5F"
                          />
                        </svg>
                        <span>6391 Elgin St. Celina, USA</span>
                      </li>
                    </ul>
                    <h3>
                      <Link href="event-details">
                        Gathering & welcome speech marketing strategy
                      </Link>
                    </h3>
                    <div className="event-author">
                      <Link href="event-details" className="theme-btn">
                        Get Ticket{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                      <div className="author-ratting">
                        <span>(10 Review)</span>
                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star color-1"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-dot text-center mb-55">
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCarousel;
