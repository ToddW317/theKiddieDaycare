import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProgramGrid from "@/components/containers/programs/ProgramGrid";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Program Grid" />
      <ProgramGrid />
      <Footer />
    </>
  );
};

export default page;
