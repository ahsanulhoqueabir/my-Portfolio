import { useInView } from "react-intersection-observer";
import Title from "./Title";
import { FaExternalLinkAlt } from "react-icons/fa";

const works = [
  {
    title: "Batch Introductory",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consequuntur asperiores assumenda praesentium! Repudiandae voluptas explicabo distinctio quidem eum dolorum totam amet, obcaecati quam sed doloremque perspiciatis accusamus asperiores aliquam aut ut nulla quibusdam repellendus inventore sapiente! Quod alias nostrum, numquam similique nisi quam suscipit recusandae amet tenetur. Ipsum laboriosam corporis cum optio impedit quis exercitationem aspernatur cumque iusto ea.",
    image: "https://i.ibb.co/31jZ124/csejnu13-netlify-app.png",
    link: "https://csejnu13.netlify.app/",
    language: ["react", "javascript", "tailwind", "daisyui", "git"],
  },
  {
    title: "foodBangla",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sit suscipit velit reiciendis. Eveniet voluptates aut vero voluptas quisquam autem dolore sint repudiandae a aperiam debitis maiores itaque minima, saepe et quae assumenda, praesentium ab officia corporis qui nobis sed. Minus sint voluptates, fuga nobis nam facere mollitia deleniti eos possimus ratione consequatur in vero.",
    image: "https://i.ibb.co/nCHZd4y/joyful-rugelach-69f894-netlify-app.png",
    link: "https://joyful-rugelach-69f894.netlify.app/",
    language: [
      "react",
      "javascript",
      "tailwind",
      "daisyui",
      "git",
      "firebase",
      "express.js",
    ],
  },
  {
    title: "tech trove",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis aliquam placeat distinctio quam ex vel autem, incidunt debitis cum quo fuga! Tenetur ducimus est nostrum molestias et hic nesciunt saepe laboriosam sequi impedit unde nisi similique repellat cum natus aut reiciendis accusantium nihil cupiditate commodi illo corporis, optio recusandae. Tenetur consequatur magnam tempora non possimus incidunt explicabo reiciendis officiis.",
    image:
      "https://i.ibb.co/j6G6XbY/venerable-malasada-051ce3-netlify-app-1.png",
    link: "https://superb-pie-440516.netlify.app/",
    language: [
      "react",
      "javascript",
      "tailwind",
      "daisyui",
      "git",
      "firebase",
      "express.js",
    ],
  },
  {
    title: "SkillSync",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsa, cumque unde explicabo laboriosam illum fugit. Itaque et vero ipsum inventore tempore nesciunt perferendis consequatur ratione, hic voluptate ut, architecto pariatur unde accusamus alias atque nostrum dignissimos! Commodi ipsa quidem atque rerum, incidunt molestias illum recusandae tempora iure nam hic, adipisci, ipsum obcaecati dolor odit ut explicabo soluta asperiores corporis laudantium animi totam facere? Facere quae quidem assumenda aspernatur aperiam dolores dicta, vitae est odio!",
    image: "https://i.ibb.co/ZTn6x5n/storied-flan-0246ff-netlify-app.png",
    link: "https://storied-flan-0246ff.netlify.app/",
    language: ["react", "javascript", "tailwind", "daisyui", "git"],
  },
];

const Work = () => {
  const { ref, inView } = useInView({
    rootMargin: "-200px 0px",
  });

  return (
    <div
      id="works"
      ref={ref}
      className={`py-10 transition-opacity ${
        inView ? "opacity-1" : "opacity-0"
      }`}
    >
      <Title>Work</Title>
      <h2 className="text-lg  text-center py-5">
        Some of the noteworthy projects I have built:{" "}
      </h2>
      <div className="flex flex-col gap-5">
        {works.map((work, idx) => (
          <div
            key={idx}
            className={`flex ${
              idx % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } flex-col items-center justify-center gap-5`}
          >
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                className="rounded-lg h-[450px] w-3/4 hover:object-cover"
                src={work.image}
                alt={work.title}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-semibold">{work.title}</h2>
              <p className="text-lg py-3">{work.description}</p>
              <div className="flex flex-wrap gap-2">
                {work.language.map((lang, indx) => (
                  <span
                    key={indx}
                    className="px-3 py-1 bg-gray-800 rounded-full text-white text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 py-5">
                <a href={work.link} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt className="text-xl"></FaExternalLinkAlt>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
