import HeaderFour from "@/components/layout/header/HeaderFour";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeacherDetails from "@/components/containers/teams/TeacherDetails";
import RelatedTeacher from "@/components/containers/teams/RelatedTeacher";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <HeaderFour />
      <CmnBanner title="Teacher Details" />
      <TeacherDetails />
      <RelatedTeacher />
      <Footer />
    </>
  );
};

export default page;
