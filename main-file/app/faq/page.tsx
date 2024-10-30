import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import FaqSection from "@/components/containers/FaqSection";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="FAQ's" />
      <FaqSection />
      <Footer />
    </>
  );
};

export default page;
