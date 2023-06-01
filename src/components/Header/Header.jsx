import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-base-100 sticky top-0">
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="flex justify-center items-center">
            <img
              className="h-16 w-24 mt-3 -mr-9"
              src="https://i.ibb.co/T8R1Hn4/Car-Toys-Logo-Emblem-Badge-Stock-Illustration-Illustration-of-star-logo-114543251-removebg-preview.png"
              alt=""
            />
            <a className="btn btn-ghost normal-case text-3xl font-bold text-success">
              CarToys
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="alltoy" className="font-bold">
                All Toys
              </Link>
            </li>
            {user && (
              <li>
                <Link to="addtoy" className="font-bold">
                  Add Toy
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="mytoy" className="font-bold">
                  My Toy
                </Link>
              </li>
            )}
            <li>
              <Link to="/blogs" className="font-bold">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="avatar">
              <div className="w-14 h-14 rounded-full">
                <img title={user.displayName} src={user.photoURL} />
              </div>
            </div>
          ) : (
            <FaUser className="mr-4"></FaUser>
          )}
          {user ? (
            <Link to="/login">
              <button
                onClick={handelLogOut}
                className="btn bg-success border-0"
              >
                LogOut
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn bg-success border-0">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
