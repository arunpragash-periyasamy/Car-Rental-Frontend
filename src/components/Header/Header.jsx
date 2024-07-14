import { BiMenuAltLeft } from "react-icons/bi";
import Logo from "/logo.svg";
import SmallLogo from "/logo-small.png";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
const Header = () => {
  const [collapse, setCollapse] = useState(false);
  const toggleCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <div className="min-w-full min-h-16 flex px-2 md:px-8 bg-white">
      <div className="md:hidden py-3 min-w-full flex items-center">
        <div className="flex-shrink-0" onClick={toggleCollapse}>
          <BiMenuAltLeft className="text-yellow-500" />
        </div>
        <div className="flex-grow text-center">
          <img src={SmallLogo} alt="" className="inline-block" />
        </div>
        <Sidebar collapse={collapse} toggleCollapse={toggleCollapse} />
      </div>
      <div className=" hidden md:flex  items-center gap-3 justify-between w-full">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div>Home</div>
          <div>Contact</div>
          <div>About Us</div>
        </div>
        <div className="hidden sm:flex gap-3">
          <button>Sign in</button>
          <button>Login in</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
