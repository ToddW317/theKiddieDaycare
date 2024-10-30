import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import NewsDetails from "@/components/containers/news/NewsDetails";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Blog Details" />
      <NewsDetails />
      <Footer />
    </>
  );
};

export default page;
