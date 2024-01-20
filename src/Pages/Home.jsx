import About from "../components/About";
import Contact from "../components/Contact";
import HomeHeader from "../components/HomeHeader";
import Skills from "../components/Skills";
import Testimonial from "../components/Testimonial";
import Work from "../components/Work";
import MessengerCustomerChat from "react-messenger-customer-chat";
const Home = () => {
  return (
    <>
      <HomeHeader></HomeHeader>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <MessengerCustomerChat
        pageId="<61555643528170>"
        appId="<1133106118066081>"
      />
    </>
  );
};

export default Home;
