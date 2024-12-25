import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactInfo from "../ContactInfo/ContactInfo";
import Services from "../Services/Services";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <ContactInfo></ContactInfo>
      {/* Browse our product */}
      {/* Meet our team */}
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
