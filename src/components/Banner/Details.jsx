import { useLoaderData } from "react-router-dom";

const Details = () => {
  const viewData = useLoaderData();
  console.log(viewData);
  const {
    sellerName,
    subCategory,
    price,
    quantity,
    name,
    description,
    photoUrl,
    rating,
    email,
  } = viewData;

  return (
    <div className=" my-14">
      <div className="card mx-auto w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {sellerName}
            <div className="badge badge-success">{subCategory}</div>
          </h2>
          <p>Email:{email}</p>
          <p>Name:{name}</p>
          <p>Quantity:{quantity}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Price: {price}</div>
            <div className="badge badge-outline">Ratings: {rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
