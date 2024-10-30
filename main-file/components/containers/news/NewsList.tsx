import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/news/post-1.jpg";
import two from "@/public/img/news/post-2.jpg";
import three from "@/public/img/news/post-3.jpg";
import four from "@/public/img/news/pp3.jpg";
import five from "@/public/img/news/pp4.jpg";
import six from "@/public/img/news/pp5.jpg";

const NewsList = () => {
  return (
    <section className="news-standard fix section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="news-standard-wrapper">
              <div className="news-standard-items">
                <div className="news-thumb">
                  <Image src={one} alt="img" priority />
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
                      That jerk form finance really me
                    </Link>
                  </h3>
                  <p>
                    Pellentesque egestas rutrum nibh facilisis ultrices.
                    Phasellus in magna ut orci malesuada the sollicitudin.
                    Aenean faucibus scelerisque convallis. Quisque interdum
                    mauris id nunc molestie tincidunt erat gravida. Nullam dui
                    libero, mollis ac quam et, venenatis.
                  </p>
                  <Link href="news-details" className="theme-btn mt-4">
                    Read More
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
              <div className="news-standard-items">
                <div className="news-thumb">
                  <Image src={two} alt="img" priority />
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
                      How to Keep Children Safe Online In Simple..
                    </Link>
                  </h3>
                  <p>
                    Pellentesque egestas rutrum nibh facilisis ultrices.
                    Phasellus in magna ut orci malesuada the sollicitudin.
                    Aenean faucibus scelerisque convallis. Quisque interdum
                    mauris id nunc molestie tincidunt erat gravida. Nullam dui
                    libero, mollis ac quam et, venenatis.
                  </p>
                  <Link href="news-details" className="theme-btn mt-4">
                    Read More
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
              <div className="news-standard-items">
                <div className="news-thumb">
                  <Image src={three} alt="img" priority />
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
                      From without content style without{" "}
                    </Link>
                  </h3>
                  <p>
                    Pellentesque egestas rutrum nibh facilisis ultrices.
                    Phasellus in magna ut orci malesuada the sollicitudin.
                    Aenean faucibus scelerisque convallis. Quisque interdum
                    mauris id nunc molestie tincidunt erat gravida. Nullam dui
                    libero, mollis ac quam et, venenatis.
                  </p>
                  <Link href="news-details" className="theme-btn mt-4">
                    Read More
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
              <div className="page-nav-wrap pt-5 text-center">
                <ul>
                  <li>
                    <Link className="page-numbers" href="/">
                      <i className="fa-solid fa-arrow-left-long"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="/">
                      01
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="/">
                      02
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="/">
                      03
                    </Link>
                  </li>
                  <li>
                    <Link className="page-numbers" href="/">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="main-sidebar">
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Search</h3>
                </div>
                <div className="search-widget">
                  <form action="#">
                    <input type="text" placeholder="Search here" />
                    <button type="submit">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Categories</h3>
                </div>
                <div className="news-widget-categories">
                  <ul>
                    <li>
                      <Link href="news-details">Teachers</Link> <span>(5)</span>
                    </li>
                    <li>
                      <Link href="news-details">Indoor Games</Link>{" "}
                      <span>(3)</span>
                    </li>
                    <li className="active">
                      <Link href="news-details">Education</Link>
                      <span>(6)</span>
                    </li>
                    <li>
                      <Link href="news-details">Canteen</Link> <span>(2)</span>
                    </li>
                    <li>
                      <Link href="news-details">Classes</Link> <span>(4)</span>
                    </li>
                    <li>
                      <Link href="news-details">Examination</Link>{" "}
                      <span>(7)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Recent Post</h3>
                </div>
                <div className="recent-post-area">
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <Image src={four} alt="img" priority />
                    </div>
                    <div className="recent-content">
                      <ul>
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          18 Dec, 2024
                        </li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          That Jerk Form Finance <br />
                          Really Me
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <Image src={five} alt="img" priority />
                    </div>
                    <div className="recent-content">
                      <ul>
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          18 Dec, 2024
                        </li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          How to keep Chidden Safe <br />
                          Online In Simple
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <Image src={six} alt="img" priority />
                    </div>
                    <div className="recent-content">
                      <ul>
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          18 Dec, 2024
                        </li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          Form Without Content <br />
                          Style Without
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Tags</h3>
                </div>
                <div className="news-widget-categories">
                  <div className="tagcloud">
                    <Link href="news-standard">Time-Table</Link>
                    <Link href="news-details">Children</Link>
                    <Link href="news-details">Examination</Link>
                    <Link href="news-details">Class</Link>
                    <Link href="news-details">Sports</Link>
                    <Link href="news-details">Canteen</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsList;
