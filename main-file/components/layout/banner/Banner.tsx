"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import one from "@/public/img/hero/bottom.png";
import two from "@/public/img/hero/parasuit.png";
import three from "@/public/img/hero/left.png";
import four from "@/public/img/hero/book.png";
import five from "@/public/img/hero/pencil.png";
import six from "@/public/img/hero/bee.png";
import seven from "@/public/img/hero/right.png";
import eight from "@/public/img/hero/star.png";
import nine from "@/public/img/hero/01.png";
import ten from "@/public/img/hero/hero-shape.png";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="hero-section hero-1 fix">
        <div className="bottom-shape">
          <Image src={one} alt="shape-img" priority />
        </div>
        <div className="parasuit-shape float-bob-y">
          <Image src={two} alt="shape-img" priority />
        </div>
        <div className="left-shape">
          <Image src={three} alt="shape-img" priority />
        </div>
        <div className="book-shape float-bob-x">
          <Image src={four} alt="shape-img" priority />
        </div>
        <div className="pencil-shape">
          <Image src={five} alt="shape-img" priority />
        </div>
        <div className="bee-shape float-bob-y">
          <Image src={six} alt="shape-img" priority />
        </div>
        <div className="right-shape">
          <Image src={seven} alt="shape-img" priority />
        </div>
        <div className="star-shape">
          <Image src={eight} alt="shape-img" priority />
        </div>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h5 data-aos-duration="800" data-aos="fade-up">
                  Kindergarten & Baby Care
                </h5>
                <h1
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Kid&apos;s Promising <br /> <span>Tomorrow</span> Ahead
                </h1>
                <p
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Suspendisse non blandit sapien Nunc eleifend, enim et porta
                  porta <br /> eros risus tincidunt diam, vel sodales{" "}
                </p>
                <div className="hero-button">
                  <Link
                    href="contact"
                    className="theme-btn "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    Apply Today <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                  <span
                    className="button-text "
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <a
                      className="video-btn ripple video-popup"
                      onClick={() => setOpen(true)}
                    >
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <span className="ms-4 d-line">Play Video</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero-image "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Image src={nine} alt="hero-img" priority />
                <div className="hero-shape">
                  <Image src={ten} alt="shape-img" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Cn4G2lZ_g2I"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Banner;
