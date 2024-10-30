import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import OurTeacher from "@/components/containers/teams/OurTeacher";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Our Teacher" />
      <OurTeacher />
      <Footer />
    </>
  );
};

export default page;
