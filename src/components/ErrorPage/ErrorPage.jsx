import useTitle from "../../Hook/useTitle";
import error from "../../assets/error/errorr404.jpg";
const ErrorPage = () => {
  useTitle("Errorpage");
  return (
    <div>
      <div>
        <img className="h-[600px] w-[40%] mx-auto" src={error} alt="" />
      </div>
      {/* <button className="btn btn-outline">Back to Home</button> */}
    </div>
  );
};

export default ErrorPage;
