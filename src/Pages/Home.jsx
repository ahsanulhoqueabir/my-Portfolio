import About from "../components/About";
import Contact from "../components/Contact";
import HomeHeader from "../components/HomeHeader";
import Skills from "../components/Skills";
import Testimonial from "../components/Testimonial";
import Work from "../components/Work";

const Home = () => {
  return (
    <>
      <HomeHeader></HomeHeader>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </>
  );
};

export default Home;
