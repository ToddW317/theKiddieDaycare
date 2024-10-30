import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProgramCarousel from "@/components/containers/programs/ProgramCarousel";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Program Carousel" />
      <ProgramCarousel />
      <Footer />
    </>
  );
};

export default page;
