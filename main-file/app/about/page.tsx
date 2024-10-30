
import CmnBanner from "@/components/layout/banner/CmnBanner";
import AboutMain from "@/components/containers/about-us/AboutMain";
import AboutTeam from "@/components/containers/about-us/AboutTeam";
import AboutTestimonial from "@/components/containers/about-us/AboutTestimonial";
import AboutInstagram from "@/components/containers/about-us/AboutInstagram";
import Footer from "@/components/layout/footer/Footer";
import HeaderOnePage from "@/components/layout/header/HeaderOnePage";

const page = () => {
  return (
    <>
      <HeaderOnePage />
      <CmnBanner title="About Us" />
      <AboutMain />
      <AboutTeam />
      <AboutTestimonial />
      <AboutInstagram />
      <Footer />
    </>
  );
};

export default page;
