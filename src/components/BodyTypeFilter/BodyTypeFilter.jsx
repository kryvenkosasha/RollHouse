import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTempBodyTypeFilter } from "../../redux/campers/campersSlice";

import styles from "./BodyTypeFilter.module.css";
import { TbCamper } from "react-icons/tb";

const BodyTypeFilter = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(
    (state) => state.campers.tempFilters.bodyType
  );

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    const updatedFilters = checked
      ? [...currentFilters, name]
      : currentFilters.filter((item) => item !== name);

    dispatch(setTempBodyTypeFilter(updatedFilters));
  };

  return (
    <div className={styles.checkboxContainer}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="VAN"
          onChange={handleCheckboxChange}
          className={styles.checkboxInput}
        />
        <span className={styles.checkboxContent}>
          <TbCamper />
          VAN
        </span>
      </label>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="Fully Integrated"
          onChange={handleCheckboxChange}
          className={styles.checkboxInput}
        />
        <span className={styles.checkboxContent}>
          <TbCamper />
          Fully Integrated
        </span>
      </label>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="Alcove"
          onChange={handleCheckboxChange}
          className={styles.checkboxInput}
        />
        <span className={styles.checkboxContent}>
          <TbCamper />
          Alcove
        </span>
      </label>
    </div>
  );
};

export default BodyTypeFilter;
