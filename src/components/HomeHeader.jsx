import { FaFigma, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import resume from '../assets/resume.pdf'
const HomeHeader = () => {
  const handleDownload = ()=>
  {
    window.open(resume);
  }
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
            <div className="size-3 animate-ping border-2 bg-green-900 shadow-xl rounded-full"></div>
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-5 text-3xl py-10">
          <a
            className="animate-pulse bg-teal-100 text-black p-3 rounded-full"
            href="https://github.com/ahsanulhoqueabir"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            className="animate-pulse bg-teal-100 text-black p-3 rounded-full"
            href=""
          >
            <FaFigma></FaFigma>
          </a>
          <button onClick={handleDownload} className="text-sm lg:text-xl box-border border-4 border-sky-900 px-3  bg-sky-600 text-white relative group">
            <span className="pr-8">Download Resume</span>
            <span className="bg-sky-900 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-8 inline mx-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
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
