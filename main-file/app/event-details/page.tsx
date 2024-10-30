import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import EventDetails from "@/components/containers/events/EventDetails";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Event Details" />
      <EventDetails />
      <Footer />
    </>
  );
};

export default page;
