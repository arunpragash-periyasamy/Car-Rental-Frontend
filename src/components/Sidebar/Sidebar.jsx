import { RiCloseLine } from "react-icons/ri";

import Logo from "/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../utils/slices/userSlice";
const Sidebar = ({collapse, toggleCollapse}) => {
  const userType = useSelector(store => store.user.userType)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(clearUser());
    navigate("/login");
  }
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
            <Link to="/my-booking">My Bookings</Link>
          </div>
          </>
          )}
          {userType ? (
          <div className="sm:flex gap-3">
              <button className="bg-orange-400 text-white p-2 rounded font-bold hover:bg-white hover:text-orange-400 border hover:border-orange-500" onClick={logout}>
                Logout
              </button>
          </div>
        ) : (
          <div className="sm:flex gap-3">
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
        </div>
      )
    );
}

export default Sidebar;