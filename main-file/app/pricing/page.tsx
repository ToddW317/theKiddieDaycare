import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import PricingPlan from "@/components/containers/PricingPlan";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Pricing" />
      <PricingPlan />
      <Footer />
    </>
  );
};

export default page;
