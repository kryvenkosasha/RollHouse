import { useEffect } from "react";
import Camper from "../Camper/Camper";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/campersSlice";

import styles from "./CampersList.module.css";

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
    <section className={styles.campers}>
      <ul className={styles.camperList}>
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
    </section>
  );
};
export default CamperList;
