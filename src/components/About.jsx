import Lottie from "lottie-react";
import anim1 from "../assets/about.json";
import Title from "./Title";

const About = () => {
  return (
    <div className="pb-10">
      <Title>About me</Title>
      <div className="flex flex-col lg:flex-row gap-5 pt-10 items-center">
        <div className="lg:w-1/2">
          <Lottie animationData={anim1}></Lottie>
        </div>
        <div className="space-y-3 lg:w-1/2">
          <h2 className="text-3xl font-semibold">
            Curious about me? Here you have it:
          </h2>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            As a Computer Science & Engineering undergraduate have interest in
            competitive programming and Web Development, I possess an in-depth
            proficiency in MS Office applications. My passion for
            problem-solving and coding fuels my drive to excel in programming
            contests, where I constantly push boundaries to find creative
            solutions. My innovative vision allows me to approach challenges
            with a fresh perspective, seeking novel ways to optimize processes
            and enhance user experiences. With a strong foundation in technology
            and a thirst for continuous learning, I am committed to making a
            positive impact in the world of technology and beyond.
          </p>
          <div className="pt-5">
            <p>Finally, some quick bits about me.</p>
            <ul className="grid grid-cols-2 list-disc pl-5 pt-3">
              <li>BSc in Computer Science and Engineering</li>
              <li>Avid Learner</li>
              <li>Competitive Programmer</li>
              <li>Front-end Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
