import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import Banner from "@/components/layout/banner/Banner";
import AboutSection from "@/components/containers/home-one/AboutSection";
import ProgramSection from "@/components/containers/home-one/ProgramSection";
import WorkProcess from "@/components/containers/home-one/WorkProcess";
import AboutActivities from "@/components/containers/home-one/AboutActivities";
import Team from "@/components/containers/home-one/Team";
import Testimonial from "@/components/containers/home-one/Testimonial";
import CTA from "@/components/containers/home-one/CTA";
import News from "@/components/containers/home-one/News";
import MainCta from "@/components/containers/home-one/MainCta";
import Instagram from "@/components/containers/home-one/Instagram";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Banner />
      <AboutSection />
      <ProgramSection />
      <WorkProcess />
      <AboutActivities />
      <Team />
      <Testimonial />
      <CTA />
      <News />
      <MainCta />
      <Instagram />
      <Footer />
    </>
  );
};

export default page;
