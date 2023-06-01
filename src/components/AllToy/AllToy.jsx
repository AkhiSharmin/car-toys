import { useLoaderData } from "react-router-dom";
import SingelData from "./SingelData.jsx";
import { useState } from "react";
import useTitle from "../../Hook/useTitle.jsx";

const AllToy = () => {
  useTitle("AllToy");

  const allToyData = useLoaderData();
  const [searchData, setSearchData] = useState(allToyData);
  console.log(allToyData);

  const handelSearchButton = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    fetch(`https://car-toys-server-kappa.vercel.app/search?sellerName=${name}`)
      .then((res) => res.json())
      .then((data) => setSearchData(data));
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handelSearchButton}>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button type="submit" className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto w-full max-w-7xl mx-auto my-14">
        <table className="table w-full">
          {/* head */}
          <thead className="relative -z-10">
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>details</th>
            </tr>
          </thead>
          <tbody>
            {searchData.map((toyData) => (
              <SingelData key={toyData._id} toyData={toyData}></SingelData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
