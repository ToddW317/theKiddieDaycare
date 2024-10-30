import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactSection from "@/components/containers/ContactSection";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Contact Us" />
      <ContactSection />
      <Footer />
    </>
  );
};

export default page;
