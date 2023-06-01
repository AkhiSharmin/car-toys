import "./FeatureToys.css";

const FeatureToys = () => {
  return (
    <div className="relative background-color shadow-xl -z-10 p-24">
      <h2 className="text-5xl drop-shadow-xl pb-4 text-center font-bold text-success">
        Our CarToys Features
      </h2>
      <p className="text-center my-3 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis{" "}
        <br />
        esse harum ipsam nisi illum possimus eum sunt!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 transition ease-in-out delay-150 max-w-7xl mx-auto">
        <div className="card w-72 bg-slate-200 shadow-xl">
          <div className="card-body card_hover">
            <img
              className="w-36"
              src="https://i.ibb.co/Mg2n6ng/5039471-1.png"
              alt=""
            />
            <h2 className="card-title text-success font-bold">
              All Kind of Brands
            </h2>
            <p>
              Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
              eiusmod te mp or incididunt ut labore.
            </p>
          </div>
        </div>
        <div className="card w-72 bg-slate-200 shadow-xl">
          <div className="card-body ">
            <img
              className="w-36"
              src="https://i.ibb.co/Mg2n6ng/5039471-1.png"
              alt=""
            />
            <h2 className="card-title text-success font-bold">
              All Kind of Brands
            </h2>
            <p>
              Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
              eiusmod te mp or incididunt ut labore.
            </p>
          </div>
        </div>
        <div className="card w-72 bg-slate-200 shadow-xl">
          <div className="card-body">
            <img
              className="w-36"
              src="https://i.ibb.co/Mg2n6ng/5039471-1.png"
              alt=""
            />
            <h2 className="card-title text-success font-bold">
              All Kind of Brands
            </h2>
            <p>
              Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
              eiusmod te mp or incididunt ut labore.
            </p>
          </div>
        </div>
        <div className="card w-72 bg-slate-200 shadow-xl">
          <div className="card-body">
            <img
              className="w-36"
              src="https://i.ibb.co/Mg2n6ng/5039471-1.png"
              alt=""
            />
            <h2 className="card-title text-success font-bold">
              All Kind of Brands
            </h2>
            <p>
              Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do
              eiusmod te mp or incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureToys;
