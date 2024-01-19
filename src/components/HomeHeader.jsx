import { FaFigma, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const HomeHeader = () => {
  return (
    <div className="py-10 flex gap-5 flex-col-reverse items-center lg:flex-row">
      <div className="space-y-2 lg:w-[60%] lg:pr-20">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Hi,I'm <span className="myText">Ahsanul Hoque</span>
        </h1>
        <p>
          I'm a Front-end Developer. I can provide clean code and pixel perfect
          design. I also make website more & more interactive with web
          animations. A passionate full stack developer from Bangladesh. I love
          to create web applications using JavaScript, React, Node, Express &
          MongoDB. I also love to design responsive websites.
        </p>

        <div className="space-y-3">
          <h3 className="flex items-center gap-2">
            <FaLocationDot /> <span>Dhaka,Bangladesh</span>
          </h3>
          <div className="flex items-center gap-3">
            <div className="size-3 animate-pulse bg-green-900 shadow-xl rounded-full"></div>
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-5 text-3xl py-10">
          <a className="animate-pulse bg-teal-100 text-black p-3 rounded-full" href="">
            <FaGithub></FaGithub>
          </a>
          <a className="animate-pulse bg-teal-100 text-black p-3 rounded-full" href="">
            <FaFigma></FaFigma>
          </a>
        </div>
      </div>
      <div className="flex w-[300px] h-[320px] lg:w-[400px] lg:h-[440px] mx-auto ">
        <img
          className="z-[10] myRadi bg-white shadow-xl shadow-lime-200"
          src="https://i.ibb.co/61zgX8X/sdfdsgasg.png"
          alt="ahsan"
        />
      </div>
    </div>
  );
};

export default HomeHeader;
