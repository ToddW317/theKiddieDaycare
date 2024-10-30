import HeaderOnePage from "@/components/layout/header/HeaderOnePage";
import TopHeader from "@/components/layout/header/TopHeader";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ErrorSection from "@/components/containers/ErrorSection";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <TopHeader />
      <HeaderOnePage />
      <CmnBanner title="Page Not Found" />
      <ErrorSection />
      <Footer />
    </>
  );
};

export default page;
