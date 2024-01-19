import { FaAlignLeft, FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar text-white px-3 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaAlignLeft className="text-3xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Work</a>
            </li>
            <li>
              <a>Testomonials</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <a className=" btn btn-ghost text-xl">
          <FaCode className="text-3xl"></FaCode>
          <span className="myText text-3xl">Ahsanul Hoque</span>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu text-xl menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>Testomonials</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
