import useTitle from "../../Hook/useTitle";
import Banner from "../Banner/Banner";
import FeatureToys from "../FeatureToys/FeatureToys";
import OurAbout from "../OurAbout/OurAbout";
import OurCategory from "../OurCategory/OurCategory";
import OurGalley from "../OurGalley/OurGalley";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <OurCategory></OurCategory>
      <OurAbout></OurAbout>
      <FeatureToys></FeatureToys>
      <OurGalley></OurGalley>
    </div>
  );
};

export default Home;
