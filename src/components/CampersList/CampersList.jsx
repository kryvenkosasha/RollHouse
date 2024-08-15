import { useEffect, useState } from "react";
import Camper from "../Camper/Camper";
import axios from "axios";

const CamperList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://662e153fa7dda1fa378bffe3.mockapi.io/campers")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <ul className="camper-list">
      {data.length > 0 ? (
        data.map((camper) => (
          <li key={camper._id}>
            <Camper camper={camper} />
          </li>
        ))
      ) : (
        <p>No campers found.</p>
      )}
    </ul>
  );
};

export default CamperList;
