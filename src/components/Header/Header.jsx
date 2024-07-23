import { BiMenuAltLeft } from "react-icons/bi";
import Logo from "/logo.svg";
import SmallLogo from "/logo-small.png";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../utils/slices/userSlice";
const Header = () => {
  const userType = useSelector(store => store.user.userType)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(clearUser());
    navigate("/login");
  }
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
          <div>
            <Link to="/">Home</Link>
          </div>
          {userType === "lessor" && (<>
          <div>
            <Link to="/add-car">Add Car</Link>
          </div>
          <div>
            <Link to="/view-cars">View Car</Link>
          </div>
          </>
          )}
          {userType === "user" && (<>
          <div>
            <Link to="/my-bookings">My Bookings</Link>
          </div>
          </>
          )}
        </div>
        {userType ? (
          <div className="hidden sm:flex gap-3">
              <button className="bg-orange-400 text-white p-2 rounded font-bold hover:bg-white hover:text-orange-400 border hover:border-orange-500" onClick={logout}>
                Logout
              </button>
          </div>
        ) : (
          <div className="hidden sm:flex gap-3">
            <Link to="/register">
              <button className="bg-black text-white p-2 font-bold border hover:bg-white hover:text-black hover:border-black rounded">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-orange-400 text-white p-2 rounded font-bold hover:bg-white hover:text-orange-400 border hover:border-orange-500">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
