import { RiCloseLine } from "react-icons/ri";

import Logo from "/logo.svg";
const Sidebar = ({collapse, toggleCollapse}) => {
    return (
      collapse && (
        <div className="fixed top-0 left-0 w-40 bg-slate-200 h-full z-50">
          <div
            className="flex justify-end px-3 gap-3 py-2 bg-white min-h-16 items-center"
            onClick={toggleCollapse}
          >
            <img src={Logo} alt="" className="w-24" />
            <RiCloseLine className="text-orange-300 font-bold text-lg" />
          </div>
          <div>
            <div className="flex flex-col gap-3 px-3 py-2">
              <Link to="/">
                <div className="">Home</div>
              </Link>
              <div>Add Car</div>
              <div>View Car</div>
              <div>My Bookings</div>
              <div>Sign Up</div>
              <div>Sign In</div>
              <div>Logout</div>
            </div>
          </div>
        </div>
      )
    );
}

export default Sidebar;