import { NavLink } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import siteLogo from "../../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="cssContainer p-0  flex-row justify-between">
      {/* Site Logo and Mobile Menu*/}
      <div className="w-full flex items-center justify-between">
        <NavLink to="/" className="">
          <img
            src={siteLogo}
            alt="Site logo"
            className="max-width-[100px] md:max-width-[140px] "
          />
        </NavLink>

        {/* Mobile menu toggle*/}
        <button>
          <RiMenu3Fill />
          <IoMdClose />
        </button>
      </div>

      {/* Site Navigations*/}
      <div id="siteNav" className="hidden md:flex gap-4">
        <Navigation />
      </div>
    </nav>
  );
}

function Navigation() {
  return (
    <>
      <NavLink to="/" className="button ">
        <IoHomeOutline />
        Home
      </NavLink>
      <NavLink to="/timeline" className="button">
        <IoMdTime />
        Timeline
      </NavLink>
      <NavLink to="/stats" className="button">
        <FaChartLine />
        Stats
      </NavLink>
    </>
  );
}
