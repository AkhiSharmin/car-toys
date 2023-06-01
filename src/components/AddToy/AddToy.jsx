import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Hook/useTitle";

const AddToy = () => {
  useTitle("AddToy");

  const { user } = useContext(AuthContext);
  console.log(user);

  const handleAdd = (event) => {
    event.preventDefault();

    const form = event.target;
    const photoUrl = form.photo.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const email = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;

    const addInfo = {
      photoUrl,
      name,
      sellerName,
      email,
      subCategory,
      description,
      price,
      rating,
      quantity,
    };

    console.log(addInfo);

    fetch("https://car-toys-server-kappa.vercel.app/alltoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added Done");
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-24">
      <form onSubmit={handleAdd}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Photo Url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              defaultValue={user?.displayName}
              type="text"
              name="sellerName"
              placeholder="Seller Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              defaultValue={user?.email}
              type="text"
              name="sellerEmail"
              placeholder="Seller Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <input
              type="text"
              name="subCategory"
              placeholder="Sub Category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Available quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Detail description"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Add Button</span>
            </label>
            <input type="submit" className="btn btn-success" value="Add Now" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
