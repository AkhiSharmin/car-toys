import "./Banner.css";
const Banner = () => {
  return (
    <div className="background" data-aos="zoom-in">
      <div className="banner-content">
        <h2 className="text-7xl text-success font-bold drop-shadow-xl">
          Pick the best toys for your kids
        </h2>
        <p className="my-8 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus odio ipsa itaque, facere aspernatur magnam at non
          deserunt ut eum.
        </p>
        <button className="btn btn-outline text-white">Discover Me</button>
      </div>
    </div>
  );
};

export default Banner;
