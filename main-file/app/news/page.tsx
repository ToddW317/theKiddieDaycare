import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import NewsList from "@/components/containers/news/NewsList";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Blog List" />
      <NewsList />
      <Footer />
    </>
  );
};

export default page;
