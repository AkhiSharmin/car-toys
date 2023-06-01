const MinifireTruck = ({ carToy }) => {
  const { price, description, name, rating, photoUrl } = carToy;
  return (
    <div>
      <div>
        <div className="mt-10">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={photoUrl} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Toy Name: {name}</h2>
              <div className="flex justify-between items-center">
                <p>Rating: {rating}</p>
                <p>Price: {price}</p>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinifireTruck;
