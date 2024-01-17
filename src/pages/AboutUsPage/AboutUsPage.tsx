import AboutUsHeader from "@/widgets/about-us/AboutUsHeader/AboutUsHeader";
import "./AboutUsPage.scss";
import AboutUsServices from "@/widgets/about-us/AboutUsServices/AboutUsServices";
import AboutUsStory from "@/widgets/about-us/AboutUsStory/AboutUsStory";
import AboutUsEmployees from "@/widgets/about-us/AboutUsEmployees/AboutUsEmployees";
import AboutUsBenefits from "@/widgets/about-us/AboutUsBenefits/AboutUsBenefits";

const AboutUsPage = () => {
  return (
    <div className="about-us">
      <AboutUsHeader />
      <AboutUsBenefits />
      <AboutUsStory />
      <AboutUsServices />
      <AboutUsEmployees />
    </div>
  );
};

export default AboutUsPage;
