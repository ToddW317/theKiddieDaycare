import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/program/p-author.jpg";

const TeacherDetails = () => {
  return (
    <section className="team-details-section fix section-padding pb-0">
      <div className="container">
        <div className="team-details-wrapper">
          <div className="team-author-items ">
            <div className="thumb">
              <Image src={one} alt="img" priority />
            </div>
            <div className="content">
              <h2>Savannah Nguyen</h2>
              <span>Children Diet</span>
              <p>
                Adipiscing elit. Mauris viverra nisl quis mollis laoreet. Ut
                eget lacus a felis accumsan pharetra in dignissim enim. In amet
                odio mollis urna aliquet volutpat. Sed bibendum nisl vehicula
                imperdiet imperdiet, augue massa fringilla.
              </p>
              <ul>
                <li>Experience: 10 Years</li>
                <li>
                  <i className="fas fa-user"></i>
                  188 Students
                </li>
                <li>
                  <i className="fa-solid fa-star color-star"></i>
                  454 (36 Review)
                </li>
              </ul>
              <div className="social-icon d-flex align-items-center">
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
          </div>
          <div className="details-info-items">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="info-content">
                  <h2>Professional Info</h2>
                  <p className="mb-3">
                    Consectetur adipisicing elit, sed do eiusmod tempor is
                    incididunt ut labore et dolore of magna aliqua. Ut enim ad
                    minim veniam, made of owl the quis nostrud exercitation
                    ullamco laboris nisi ut aliquip
                  </p>
                  <p>
                    The is ipsum dolor sit amet consectetur adipiscing elit.
                    Fusce eleifend porta arcu In hac augu ehabitasse the is
                    platea augue thelorem turpoi dictumst. In lacus libero
                    faucibus
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="progress-area">
                  <div className="progress-wrap">
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Creativity</h6>
                        <span className="point">90%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-value"></div>
                      </div>
                    </div>
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Time Management</h6>
                        <span className="point">70%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-value style-two"></div>
                      </div>
                    </div>
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Art and Carft</h6>
                        <span className="point">55%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-value style-three"></div>
                      </div>
                    </div>
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

export default TeacherDetails;