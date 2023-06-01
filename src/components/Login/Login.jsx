import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import bgVideo from "../../assets/login.mp4";
import "./Login.css";
import useTitle from "../../Hook/useTitle";

const Login = () => {
  useTitle("login");

  const { loggedInUser, googleSingIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const fromm = location.state?.fromm?.pathname || "/";
  //onsubmit
  const handelLogIn = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    loggedInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("created user", user);
        navigate(fromm, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handelSingIn = () => {
    googleSingIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className=" mx-auto w-full">
      <video className="videoTag h-screen object-cover" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className=" lg:w-[30%] mx-auto my-10">
        <h1 className="text-3xl font-bold text-center py-4 text-success">
          Login Now
        </h1>
        <div className="card-body box-shadow rounded-2xl my-4">
          <form onSubmit={handelLogIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-active bg-success border-0"
                type="submit"
                value="Login"
              />
              <div className="divider">OR</div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handelSingIn}
                className="btn gap-2 bg-success border-0"
              >
                <FaGoogle></FaGoogle> Google
              </button>
            </div>
          </form>
          <p className="text-center">
            <span className="">New to Car Toys? </span>
            <Link className="font-bold underline text-red-500" to="/singup">
              SingUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
