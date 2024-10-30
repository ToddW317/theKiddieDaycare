import Image from "next/image";
import one from "@/public/img/process/line.png";
import two from "@/public/img/process/01.svg";
import three from "@/public/img/process/line-2.png";
import four from "@/public/img/process/02.svg";
import five from "@/public/img/process/03.svg";
import six from "@/public/img/process/04.svg";

const WorkProcess = () => {
  return (
    <section className="work-process-section fix section-padding fix">
      <div className="container">
        <div className="process-work-wrapper">
          <div className="row g-4">
            <div
              className="col-xl-3 col-lg-4 col-md-6 "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="work-process-items text-center">
                <div className="line-shape">
                  <Image src={one} alt="shape-img" priority />
                </div>
                <div
                  className="icon bg-cover"
                  style={{
                    backgroundImage: "url(/img/process/icon-bg.png)",
                  }}
                >
                  <Image src={two} alt="img" priority />
                </div>
                <div className="content">
                  <h4>Choose A Service</h4>
                  <p>
                    In a free hour, when our power of choice is untrammeled and
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="work-process-items text-center style-2">
                <div className="line-shape-2">
                  <Image src={three} alt="shape-img" priority />
                </div>
                <div
                  className="icon bg-cover"
                  style={{
                    backgroundImage: "url(/img/process/icon-bg.png)",
                  }}
                >
                  <Image src={four} alt="img" priority />
                </div>
                <div className="content">
                  <h4>Expert Teachers</h4>
                  <p>
                    In a free hour, when our power of choice is untrammeled and
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="work-process-items text-center">
                <div className="line-shape">
                  <Image src={one} alt="shape-img" priority />
                </div>
                <div
                  className="icon bg-cover"
                  style={{
                    backgroundImage: "url(/img/process/icon-bg.png)",
                  }}
                >
                  <Image src={five} alt="img" priority />
                </div>
                <div className="content">
                  <h4>E-Learning Media</h4>
                  <p>
                    In a free hour, when our power of choice is untrammeled and
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="work-process-items text-center">
                <div className="content style-two">
                  <h4>Full Day Programs</h4>
                  <p>
                    In a free hour, when our power of choice is untrammeled and
                  </p>
                </div>
                <div
                  className="icon bg-cover"
                  style={{
                    backgroundImage: "url(/img/process/icon-bg.png)",
                  }}
                >
                  <Image src={six} alt="img" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
