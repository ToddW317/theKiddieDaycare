"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logo/logo.svg";
import one from "@/public/img/header/home-1.jpg";
import two from "@/public/img/header/home-2.jpg";
import three from "@/public/img/header/home-3.jpg";
import four from "@/public/img/header/home-4.jpg";

const OffCanvasMenu = ({ toggleMenu, handleToggleMenu }: any) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " sub-menu-active" : " ";
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " drop-active" : " ";
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? "sub-menu-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " drop-active" : " ";
  };

  return (
    <>
      <div className="fix-area d-block d-xl-none">
        <div className={(toggleMenu ? " info-open" : " ") + " offcanvas__info"}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image src={logo} alt="logo-img" priority />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => handleToggleMenu(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                  <nav className="mean-nav mobile-menu">
                    <ul>
                      <li className="has-dropdown active menu-thumb">
                        <a
                          className={`drop ${isSubMenuButton("home")}`}
                          onClick={() => handleSubmenu("home")}
                        >
                          Home
                        </a>
                        <ul
                          className={`submenu has-homemenu ${isSubMenuOpen(
                            "home"
                          )}`}
                        >
                          <li>
                            <div className="homemenu-items">
                              <div className="homemenu">
                                <div className="homemenu-thumb">
                                  <Image src={one} alt="img" priority />
                                  <div className="demo-button">
                                    <Link href="/" className="theme-btn">
                                      <span>Multi Page</span>
                                    </Link>
                                    <Link
                                      href="index-one-page"
                                      className="theme-btn"
                                    >
                                      <span>One Page</span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">Home 01</h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <Image src={two} alt="img" priority />
                                  <div className="demo-button">
                                    <Link href="index-2" className="theme-btn">
                                      <span>Multi Page</span>
                                    </Link>
                                    <Link
                                      href="index-two-page"
                                      className="theme-btn"
                                    >
                                      <span>One Page</span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">Home 02</h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <Image src={three} alt="img" priority />
                                  <div className="demo-button">
                                    <Link href="index-3" className="theme-btn">
                                      <span>Multi Page</span>
                                    </Link>
                                    <Link
                                      href="index-three-page"
                                      className="theme-btn"
                                    >
                                      <span>One Page</span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">Home 03</h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <Image src={four} alt="img" priority />
                                  <div className="demo-button">
                                    <Link href="index-4" className="theme-btn">
                                      <span>Multi Page</span>
                                    </Link>
                                    <Link
                                      href="index-four-page"
                                      className="theme-btn"
                                    >
                                      <span>One Page</span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">Home 04</h4>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="about">About Us</Link>
                      </li>
                      <li>
                        <a
                          className={`drop ${isSubMenuButton("programs")}`}
                          onClick={() => handleSubmenu("programs")}
                        >
                          Programs
                        </a>
                        <ul className={`submenu ${isSubMenuOpen("programs")}`}>
                          <li>
                            <Link href="program">Programs Grid</Link>
                          </li>
                          <li>
                            <Link href="program-carousel">
                              Programs Carousel
                            </Link>
                          </li>
                          <li>
                            <Link href="program-details">Programs Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a
                          className={`drop ${isSubMenuButton("pages")}`}
                          onClick={() => handleSubmenu("pages")}
                        >
                          Pages
                        </a>
                        <ul className={`submenu ${isSubMenuOpen("pages")}`}>
                          <li className="has-dropdown">
                            <a
                              className={`drop ${isNestedMenuButton("event")}`}
                              onClick={() => handleNestedmenu("event")}
                            >
                              Event
                            </a>
                            <ul
                              className={`submenu ${isNestedMenuOpen("event")}`}
                            >
                              <li>
                                <Link href="event">Event Grid</Link>
                              </li>
                              <li>
                                <Link href="event-carousel">
                                  Event Carousel
                                </Link>
                              </li>
                              <li>
                                <Link href="event-details">Event Details</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a
                              className={`drop ${isNestedMenuButton(
                                "teacher"
                              )}`}
                              onClick={() => handleNestedmenu("teacher")}
                            >
                              Teacher
                            </a>
                            <ul
                              className={`submenu ${isNestedMenuOpen(
                                "teacher"
                              )}`}
                            >
                              <li>
                                <Link href="team">Our Teacher</Link>
                              </li>
                              <li>
                                <Link href="team-carousel">
                                  Teacher Carousel
                                </Link>
                              </li>
                              <li>
                                <Link href="team-details">Teacher Details</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="pricing">Pricing</Link>
                          </li>
                          <li>
                            <Link href="faq">FAQ&apos;S</Link>
                          </li>
                          <li>
                            <Link href="404">404 Page</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className={`drop ${isSubMenuButton("blog")}`}
                          onClick={() => handleSubmenu("blog")}
                        >
                          Blog
                        </a>
                        <ul className={`submenu ${isSubMenuOpen("blog")}`}>
                          <li>
                            <Link href="news-grid">Blog Grid</Link>
                          </li>
                          <li>
                            <Link href="news">Blog List</Link>
                          </li>
                          <li>
                            <Link href="news-carousel">Blog Carousel</Link>
                          </li>
                          <li>
                            <Link href="news-details">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link target="_blank" href="/">
                        Main Street, Melbourne, Australia
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="mailto:info@example.com">
                        <span className="mailto:info@example.com">
                          info@example.com
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link target="_blank" href="/">
                        Mod-friday, 09am -05pm
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="tel:+11002345909">+11002345909</Link>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="contact" className="theme-btn text-center">
                    <span>
                      Get A Quote
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <Link href="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          (toggleMenu ? " overlay-open" : " ") +
          " offcanvas__overlay d-block d-xl-none"
        }
        onClick={() => handleToggleMenu(false)}
      ></div>
    </>
  );
};

export default OffCanvasMenu;
