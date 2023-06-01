import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SportsCar from "./SportsCar";
import MinipoliceCar from "./MinipoliceCar";
import MinifireTruck from "./MinifireTruck";

const OurCategory = () => {
  const [carToys, setCarToys] = useState([]);
  const [category, setCategory] = useState("sportscar");

  useEffect(() => {
    fetch(
      `https://car-toys-server-kappa.vercel.app/category?subCategory=${category}`
    )
      .then((res) => res.json())
      .then((data) => setCarToys(data));
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto my-14">
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategory("sportscar")}>Sports Car</Tab>
          <Tab onClick={() => setCategory("minipolicecar")}>
            Mini Police Car
          </Tab>
          <Tab onClick={() => setCategory("minifiretruck")}>
            Mini fire truck
          </Tab>
        </TabList>

        <TabPanel>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2">
            {carToys.map((carToy) => (
              <SportsCar key={carToy._id} carToy={carToy}></SportsCar>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2">
            {carToys.map((carToy) => (
              <MinipoliceCar key={carToy._id} carToy={carToy}></MinipoliceCar>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2">
            {carToys.map((carToy) => (
              <MinifireTruck key={carToy._id} carToy={carToy}></MinifireTruck>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurCategory;
