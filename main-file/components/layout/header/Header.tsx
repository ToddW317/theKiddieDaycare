"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import OffCanvasMenu from "./OffCanvasMenu";
import logo from "@/public/img/logo/logo.svg";
import grid from "@/public/img/grid.svg";
import one from "@/public/img/header/home-1.jpg";
import two from "@/public/img/header/home-2.jpg";
import three from "@/public/img/header/home-3.jpg";
import four from "@/public/img/header/home-4.jpg";

const Header = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleResizeHeader = (): void => {
      setToggleMenu(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // search toggle
  const [searchToggle, setSearchToggle] = useState(false);

  const handleSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const closeSearch = () => {
    setSearchToggle(false);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <header
        id="header-sticky"
        className={(scrolled ? " animated sticky" : " ") + " header-1"}
      >
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main style-2">
              <div className="header-left">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <Image src={logo} alt="logo-img" priority />
                  </Link>
                </div>
                <div className="category-oneadjust">
                  <Image src={grid} alt="img" priority className="me-2" />
                  <select name="cate" className="category">
                    <option value="1">Category</option>
                    <option value="1">Designer</option>
                    <option value="1">Developer</option>
                    <option value="1">Graphic</option>
                    <option value="1">Software</option>
                  </select>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper d-none d-xl-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <Link href="/">
                            Home
                            <i className="fas fa-angle-down"></i>
                          </Link>
                          <ul className="submenu has-homemenu">
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
                                      <Link
                                        href="index-2"
                                        className="theme-btn"
                                      >
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
                                      <Link
                                        href="index-3"
                                        className="theme-btn"
                                      >
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
                                      <Link
                                        href="index-4"
                                        className="theme-btn"
                                      >
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
                          <Link href="program-details">
                            Programs
                            <i className="fas fa-angle-down"></i>
                          </Link>
                          <ul className="submenu">
                            <li>
                              <Link href="program">Programs Grid</Link>
                            </li>
                            <li>
                              <Link href="program-carousel">
                                Programs Carousel
                              </Link>
                            </li>
                            <li>
                              <Link href="program-details">
                                Programs Details
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link href="news">
                            Pages
                            <i className="fas fa-angle-down"></i>
                          </Link>
                          <ul className="submenu">
                            <li className="has-dropdown">
                              <Link href="event-details">
                                Event
                                <i className="fas fa-angle-down"></i>
                              </Link>
                              <ul className="submenu">
                                <li>
                                  <Link href="event">Event Grid</Link>
                                </li>
                                <li>
                                  <Link href="event-carousel">
                                    Event Carousel
                                  </Link>
                                </li>
                                <li>
                                  <Link href="event-details">
                                    Event Details
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <Link href="team-details">
                                Teacher
                                <i className="fas fa-angle-down"></i>
                              </Link>
                              <ul className="submenu">
                                <li>
                                  <Link href="team">Our Teacher</Link>
                                </li>
                                <li>
                                  <Link href="team-carousel">
                                    Teacher Carousel
                                  </Link>
                                </li>
                                <li>
                                  <Link href="team-details">
                                    Teacher Details
                                  </Link>
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
                          <Link href="news">
                            Blog
                            <i className="fas fa-angle-down"></i>
                          </Link>
                          <ul className="submenu">
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
                <button
                  className="search-trigger search-icon"
                  onClick={handleSearch}
                >
                  <i className="fal fa-search"></i>
                </button>
                <div className="header-button">
                  <Link href="contact" className="theme-btn">
                    <span>
                      get A Quote
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle" onClick={handleToggleMenu}>
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffCanvasMenu
        toggleMenu={toggleMenu}
        handleToggleMenu={handleToggleMenu}
      />
      <div
        className={(searchToggle ? " open" : " ") + " search-wrap"}
        onClick={closeSearch}
      >
        <div className="search-inner">
          <i
            className="fas fa-times search-close"
            id="search-close"
            onClick={closeSearch}
          ></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                  onClick={handleClick}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
