import { Link } from "react-router-dom";

const MySingelToy = ({ allData, myData, setMyData }) => {
  const {
    _id,
    email,
    photoUrl,
    sellerName,
    subCategory,
    price,
    quantity,
    name,
  } = allData;
  console.log(photoUrl);

  //delete data fetch
  const handelToyDelete = (id) => {
    fetch(`https://car-toys-server-kappa.vercel.app/alltoy/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Deleted Successfully");
        }
      });
    const renaming = myData.filter((data) => data._id !== id);
    setMyData(renaming);
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{sellerName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/update/${_id}`}>
          <button className="btn bg-success btn-xs border-0 mr-4">
            Update
          </button>
        </Link>
        <button
          onClick={() => handelToyDelete(_id)}
          className="btn btn-ghost btn-xs bg-slate-300"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MySingelToy;
