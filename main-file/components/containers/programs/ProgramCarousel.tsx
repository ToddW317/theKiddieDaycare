"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/img/classes/01.png";
import two from "@/public/img/classes/02.png";
import three from "@/public/img/classes/03.png";

const ProgramCarousel = () => {
  return (
    <section className="clases-section section-padding">
      <div className="container">
        <div className="swiper clases-slider">
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
                      Nulla a auctor leo. Vestibulum viverra mattis arcu <br />{" "}
                      nec viverra. Vivamus{" "}
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
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
                      Nulla a auctor leo. Vestibulum viverra mattis arcu <br />{" "}
                      nec viverra. Vivamus{" "}
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
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
                      Nulla a auctor leo. Vestibulum viverra mattis arcu <br />{" "}
                      nec viverra. Vivamus{" "}
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
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
                      Nulla a auctor leo. Vestibulum viverra mattis arcu <br />{" "}
                      nec viverra. Vivamus{" "}
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
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
                      Nulla a auctor leo. Vestibulum viverra mattis arcu <br />{" "}
                      nec viverra. Vivamus{" "}
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
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
                      Nulla a auctor leo. Vestibulum viverra mattis arcu <br />{" "}
                      nec viverra. Vivamus{" "}
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

export default ProgramCarousel;
