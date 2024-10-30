import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeacherCarousel from "@/components/containers/teams/TeacherCarousel";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Teacher Carousel" />
      <TeacherCarousel />
      <Footer />
    </>
  );
};

export default page;
