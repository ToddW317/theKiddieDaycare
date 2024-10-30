import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProgramDetails from "@/components/containers/programs/ProgramDetails";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Program Details" />
      <ProgramDetails />
      <Footer />
    </>
  );
};

export default page;
