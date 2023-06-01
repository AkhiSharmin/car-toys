import "./OurAbout.css";
const OurAbout = () => {
  return (
    //about page
    <div>
      <div className="hero min-h-screen bg-base-200 relative -z-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="w-3/4 rounded-lg shadow-2xl"
            />
            <img
              src="https://images.unsplash.com/photo-1587839871379-2d6c28071f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1218&q=80"
              className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl second-img"
              data-aos="flip-left"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            <h1 className="text-5xl font-bold text-success drop-shadow-xl">
              We are qualified & of CarToys
            </h1>
            <p className="py-6">
              Find cars for sale, local dealers, and advice. Also, our
              price-badging and price-drop notifications keep you informed of
              potential deals.Cars.com experts offer unbiased coverage of todays
              automotive landscape. Yes, there will be dad jokes.
            </p>
            <p className="py-6">
              Check out our free, secure methods for selling your car. You can
              either sell directly to a private-party shopper or get an Instant
              Offer from a dealership. Choose the option that’s right for you!
            </p>
            <button className="btn btn-success">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAbout;
