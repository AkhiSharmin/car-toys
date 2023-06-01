import { useLoaderData } from "react-router-dom";

const Update = () => {
  const updateData = useLoaderData();
  const { _id, price, quantity, description } = updateData;
  console.log(updateData);

  const handelUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const description = form.description.value;
    const quantity = form.quantity.value;

    const addUpdateInfo = {
      price,
      quantity,
      description,
    };
    //update data loaded
    fetch(`https://car-toys-server-kappa.vercel.app/alltoy/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addUpdateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Successfully Updated");
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-24">
      <form onSubmit={handelUpdate}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              defaultValue={price}
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              defaultValue={quantity}
              type="text"
              name="quantity"
              placeholder="Available quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              defaultValue={description}
              type="text"
              name="description"
              placeholder="Detail Description"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Update</span>
            </label>
            <input type="submit" className="btn btn-success" value="Update" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
