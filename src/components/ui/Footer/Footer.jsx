import barndLogo from "../../../assets/logo-xl.png";
import facebookLogo from "../../../assets/facebook.png";
import instagramLogo from "../../../assets/instagram.png";
import twitterLogo from "../../../assets/twitter.png";
import { NavLink } from "react-router";

function LegalLinks() {
  return (
    <>
      <NavLink to={"/"} className="text-[#FAFAFA] hover:text-white">
        Privacy Policy
      </NavLink>
      <NavLink to={"/"} className="text-[#FAFAFA] hover:text-white">
        Terms of Service
      </NavLink>
      <NavLink to={"/"} className="text-[#FAFAFA] hover:text-white">
        Cookies
      </NavLink>
    </>
  );
}

export default function Footer() {
  return (
    <section className="bg-brand ">
      <div className="cssContainer pb-0 text-center text-white">
        {/* Top Panel*/}
        <div className="space-y-6">
          {/* Brand Logo*/}
          <div className="space-y-4">
            <img
              src={barndLogo}
              alt="Brand Logo"
              className="mx-auto max-w-70"
            />
            <p className="">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </div>
          {/* Social Logo*/}
          <div className="space-y-4">
            <p className="text-xl">Social Links</p>
            {/* Links*/}
            <div className="flex item-center justify-center gap-3">
              <img src={instagramLogo} alt="" className="" />
              <img src={facebookLogo} alt="" className="" />
              <img src={twitterLogo} alt="" className="" />
            </div>
          </div>
        </div>

        {/* Bottom Panel*/}
        <div className="w-full py-8 max-md:flex-col max-md:gap-6 flex items-center justify-between">
          <p className="text-[#FAFAFA] ">
            © {new Date().getFullYear()} KeenKeeper. All rights reserved.
          </p>

          <div className="flex gap-6">
            <LegalLinks></LegalLinks>
          </div>
        </div>
      </div>
    </section>
  );
}
