import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MySingelToy from "./MySingelToy.jsx";
import useTitle from "../../Hook/useTitle";

const MyToy = () => {
  useTitle("MyToy");

  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);

  console.log(myData);

  const url = `https://car-toys-server-kappa.vercel.app/mytoy?email=${user?.email}`;
  console.log(user);

  // https://car-toys-server-kappa.vercel.app/sort?sort=ascending&email=akhi@gmail.com

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, [url]);

  //ascending  descending
  const ascending = (text) => {
    fetch(
      `https://car-toys-server-kappa.vercel.app/sort?sort=ascending&email=${text}&email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyData(data));
  };

  const descending = (text) => {
    fetch(
      `https://car-toys-server-kappa.vercel.app/sort?sort=ascending&email=${text}&email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyData(data));
  };

  return (
    <div className="max-w-7xl my-12 mx-auto">
      <div>
        <div className="mx-auto mr-20">
          <button
            onClick={() => ascending("ascending")}
            className="btn btn-primary"
          >
            ascending
          </button>
          <button
            onClick={() => descending("descending")}
            className="btn btn-success"
          >
            descending
          </button>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Seller</th>
                  <th>Seller Email</th>
                  <th>Toy Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>View details</th>
                </tr>
              </thead>
              <tbody>
                {myData.map((allData) => (
                  <MySingelToy
                    key={allData._id}
                    allData={allData}
                    myData={myData}
                    setMyData={setMyData}
                  ></MySingelToy>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToy;
