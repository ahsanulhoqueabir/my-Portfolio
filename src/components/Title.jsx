import { Children } from "react";

const Title = ({children}) => {
  return (
    <div className="flex justify-center items-center gap-5">
      <hr className="border-2 border-black w-[20%]" />
      <button className="bg-black hover:bg-green-300 px-5 py-2 rounded-xl hover:text-black ">
        {children}
      </button>
      <hr className="border-2 border-black w-[20%]" />
    </div>
  );
};

export default Title;
