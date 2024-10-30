import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import EventGrid from "@/components/containers/events/EventGrid";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Event Grid" />
      <EventGrid />
      <Footer />
    </>
  );
};

export default page;
