import { Link } from "react-router-dom";

const SingelData = ({ toyData }) => {
  const { _id, sellerName, subCategory, price, quantity, name } = toyData;

  return (
    <tr>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/details/${_id}`}>
          <button className="btn bg-success btn-xs border-0 mr-4">
            View details
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default SingelData;
