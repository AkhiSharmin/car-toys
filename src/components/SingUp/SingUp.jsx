import { Link } from "react-router-dom";
import "./SingUp.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import bgVideo from "../../assets/login.mp4";
import { updateProfile } from "firebase/auth";
import useTitle from "../../Hook/useTitle";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  useTitle("singup");

  const handelSingUp = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photo = from.photo.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("created user", user);
        handelUpdate(user, name, photo);
        from.reset();
      })
      .catch((error) => console.log(error));
  };

  const handelUpdate = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <video
        className="videoTag md:w-full h-screen object-cover"
        autoPlay
        loop
        muted
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="mx-auto">
        <div className=" lg:w-[30%] mx-auto">
          <h1 className="text-3xl font-bold text-center pb-4 text-success">
            SingUp
          </h1>
          <div className="card-body box-shadow rounded-2xl">
            <form onSubmit={handelSingUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  required
                  type="name"
                  placeholder="Enter Your Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  required
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  required
                  type="photo"
                  name="photo"
                  placeholder="Photo Url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-success border-0"
                  type="submit"
                  value="Sing Up"
                />
              </div>
            </form>
            <p className="text-center">
              Already Have an Account?
              <Link className="text-red-500 font-bold" to="/login">
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
