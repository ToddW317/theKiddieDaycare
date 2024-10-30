import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import NewsGrid from "@/components/containers/news/NewsGrid";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Blog Grid" />
      <NewsGrid />
      <Footer />
    </>
  );
};

export default page;
