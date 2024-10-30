import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import EventCarousel from "@/components/containers/events/EventCarousel";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Event Carousel" />
      <EventCarousel />
      <Footer />
    </>
  );
};

export default page;
