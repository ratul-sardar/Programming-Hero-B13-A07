import { NavLink } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import siteLogo from "../../../assets/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className="relative z-20 cssContainer py-4  flex-row justify-between">
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
        <button
          onClick={() => setShowMobileNav(!showMobileNav)}
          className=" md:hidden text-[28px] text-brand"
        >
          {showMobileNav ? <IoMdClose /> : <RiMenu3Fill />}
        </button>
      </div>

      {/* Site Navigations*/}
      <div className="siteNav hidden md:flex gap-4">
        <Navigation />
      </div>

      {/* Mobile Site Navigations*/}
      {showMobileNav && (
        <div className="siteNav absolute top-[110%] z-10 w-full p-7 bg-white rounded-2xl border border-gray-300 flex flex-col gap-4">
          <Navigation />
        </div>
      )}
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
