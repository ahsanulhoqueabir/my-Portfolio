import Marquee from "react-fast-marquee";
import Title from "./Title";

const Skills = () => {
  return (
    <div className="pb-10">
      <Title>Skills</Title>
      <h2 className="text-lg text-center py-4 pb-5">
        The skills, tools and technologies I am really good at:
      </h2>
      <div>
        <Marquee className="">
          <div className="flex justify-between gap-16 lg:gap-48">
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                alt="html5"
              />
              <p>HTML5</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/css3.png"
                alt="css3"
              />
              <p>CSS3</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                alt="javascript"
              />
              <p>JavaScript</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/react-native.png"
                alt="react"
              />
              <p>React</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/nodejs.png"
                alt="nodejs"
              />
              <p>NodeJS</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/mongodb.png"
                alt="mongodb"
              />
              <p>MongoDB</p>
            </div>
          </div>
        </Marquee>
        <br />
        <br />
        <Marquee direction="right" delay={1}>
          <div className="flex justify-between gap-16 lg:gap-48">
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/git.png"
                alt="git"
              />
              <p>Git</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/github--v1.png"
                alt="github"
              />
              <p>GitHub</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/npm.png"
                alt="npm"
              />
              <p>NPM</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
                alt="vscode"
              />
              <p>VSCode</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/figma--v1.png"
                alt="figma"
              />
              <p>Figma</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/adobe-photoshop.png"
                alt="photoshop"
              />
              <p>Photoshop</p>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
