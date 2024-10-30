import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/event/event-details-1.jpg";
import two from "@/public/img/event/event-details-2.jpg";
import three from "@/public/img/event/event-details-3.jpg";
import four from "@/public/img/event/icon/01.svg";
import five from "@/public/img/event/icon/02.svg";
import six from "@/public/img/event/icon/03.svg";
import seven from "@/public/img/event/icon/04.svg";
import eight from "@/public/img/event/icon/05.svg";
import nine from "@/public/img/event/icon/06.svg";

const EventDetails = () => {
  return (
    <section className="event-details-section fix section-padding">
      <div className="container">
        <div className="event-details-wrapper">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="event-details-items">
                <div className="details-image">
                  <Image src={one} alt="img" priority />
                </div>
                <div className="event-details-content">
                  <div className="post-items">
                    <span className="post-date">
                      <i className="fa-regular fa-calendar-days"></i>
                      October 20, 2024
                    </span>
                    <span className="post-time">
                      <i className="fa-regular fa-calendar-days"></i>
                      October 20, 2024
                    </span>
                  </div>
                  <h2>Let&apos;s spend summer together with your teachers</h2>
                  <p className="mb-3">
                    Consectetur adipisicing elit, sed do eiusmod tempor is
                    incididunt ut labore et dolore of magna aliqua. Ut enim ad
                    minim veniam, made of owl the quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea dolor commodo
                    consequat. Duis aute irure and dolor in reprehenderit.
                  </p>
                  <p className="mb-4">
                    The is ipsum dolor sit amet consectetur adipiscing elit.
                    Fusce eleifend porta arcu In hac augu ehabitasse the is
                    platea augue thelorem turpoi dictumst. In lacus libero
                    faucibus at malesuada sagittis placerat eros sed istincidunt
                    augue ac ante rutrum sed the is sodales augue consequat.
                  </p>
                  <h2>Requirements for the event</h2>
                  <p className="mb-4">
                    Nulla facilisi. Vestibulum tristique sem in eros eleifend
                    imperdiet. Donec quis convallis neque. In id lacus pulvinar
                    lacus, eget vulputate lectus. Ut viverra bibendum lorem, at
                    tempus nibh mattis in. Sed a massa eget lacus consequat
                    auctor.
                  </p>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <ul className="list">
                        <li>
                          <i className="fa-solid fa-check"></i>
                          Ut viverra bibendum lorem, at tempus nibh mattis
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          quis nostrud exercitation ullamco laboris nisi
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list">
                        <li>
                          <i className="fa-solid fa-check"></i>
                          Duis aute irure and dolor in reprehenderit.
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          ante rutrum sed the is sodales augue
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row g-4 mt-4">
                    <div className="col-md-6">
                      <div className="thumb">
                        <Image src={two} alt="img" priority />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="thumb">
                        <Image src={three} alt="img" priority />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">
                    Consectetur adipisicing elit, sed do eiusmod tempor is
                    incididunt ut labore et dolore of magna aliqua. Ut enim ad
                    minim veniam, made of owl the quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea dolor commodo
                    consequat. Duis aute irure and dolor in reprehenderit.
                  </p>
                </div>
                <div className="about-author">
                  <div className="about-button">
                    <Link href="contact" className="theme-btn">
                      Register Yourself{" "}
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                  <div className="author-icon">
                    <div className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="content">
                      <span>Call Us Now</span>
                      <h5>
                        <Link href="tel:+2085550112">+208-555-0112</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="details-list-area">
                <h3>Event Information:</h3>
                <ul className="details-list">
                  <li>
                    <span>
                      <Image src={four} alt="img" className="me-2" priority />
                      Start Date:
                    </span>
                    October 20, 2024
                  </li>
                  <li>
                    <span>
                      <Image src={five} alt="img" className="me-2" priority />
                      Duration:
                    </span>
                    09:00am - 05:00pm
                  </li>
                  <li>
                    <span>
                      <Image src={six} alt="img" className="me-2" priority />
                      Location:
                    </span>
                    6391 Elgin St. Celina, USA
                  </li>
                  <li>
                    <span>
                      <Image src={seven} alt="img" className="me-2" priority />
                      Phone:
                    </span>
                    319-555-1225
                  </li>
                  <li>
                    <span>
                      <Image src={eight} alt="img" className="me-2" priority />
                      Email:
                    </span>
                    Info@gmail.com
                  </li>
                  <li>
                    <span>
                      <Image src={nine} alt="img" className="me-2" priority />
                      Language
                    </span>
                    English
                  </li>
                </ul>
                <Link href="event-details" className="theme-btn w-100">
                  Get Tickets Now{" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
                <div className="social-icon d-flex align-items-center">
                  <span>Share: </span>
                  <Link href="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="/">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </div>
              </div>
              <div className="map-items">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                  style={{ border: "0px" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
