import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import NewsCarousel from "@/components/containers/news/NewsCarousel";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Blog Carousel" />
      <NewsCarousel />
      <Footer />
    </>
  );
};

export default page;
