import { useEffect} from "react";
import Camper from "../Camper/Camper";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/campersSlice";

const CamperList = () => {
  const dispatch = useDispatch();

  const campers = useSelector((state) => state.campers.filteredCampers);
    const status = useSelector((state) => state.campers.status);
    

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCampers());
    }
  }, [status, dispatch]);

  return (
    <ul className="camper-list">
      {campers.length > 0 ? (
        campers.map((camper) => (
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
