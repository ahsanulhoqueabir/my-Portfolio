import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaRegCopy,
} from "react-icons/fa";
import Title from "./Title";
import { useRef, useState } from "react";

const Contact = () => {
  const [copyText, setCopyText] = useState("");
  const textAreaRef = useRef(null);
  const handleCopy = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopyText("Copied!");
    setTimeout(() => {
      setCopyText(
        "Click to copy email address or press Ctrl+c on your keyboard."
      );
    }, 2000);
  };
  return (
    <div id="contact" className="py-10">
      <Title>Get in touch</Title>
      <div className="justify-center flex flex-col items-center">
        <h2 className="text-xl lg:text-4xl text-center py-5">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </h2>
        {/* <div className="flex gap-5 justify-center items-center">
                    <a href="mailto:
                    contact.ahsanul@gmail.com?subject=Contact%20from%
                    ahsanul'sPortfolio" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Email Me</a>

                    <a href="https://www.linkedin.com/in/ahsnaulhoqueabir/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">LinkedIn</a>
                   
                    </div> */}
        <div className="flex gap-3 items-center text-xl">
          <FaEnvelope /> <p>contact.ahsanul@gmail.com</p>{" "}
          <button onClick={handleCopy}>
            <FaRegCopy />
          </button>
        </div>
        <div className="py-10 space-y-5">
          <h2>You may also find me on these platforms!</h2>
          <div className="flex gap-5 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/ahsnaulhoqueabir/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-4  rounded"
            >
              <FaLinkedin className="text-xl"></FaLinkedin>
            </a>
            <a
              href="https://github.com/ahsanulhoqueabir"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-4  rounded"
            >
              <FaGithub className="text-xl"></FaGithub>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
