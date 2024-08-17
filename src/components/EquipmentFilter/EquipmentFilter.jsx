import { useDispatch, useSelector } from "react-redux";
import { setTempEquipmentFilter } from "../../redux/campers/campersSlice";

import {
  TbToolsKitchen2,
  TbAirConditioning,
  TbAutomaticGearbox,
} from "react-icons/tb";
import { LuShowerHead } from "react-icons/lu";
import { IoTvOutline } from "react-icons/io5";

import styles from "./EquipmentFilter.module.css";

const EquipmentFilter = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(
    (state) => state.campers.tempFilters.equipment
  );

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    const updatedFilters = checked
      ? [...currentFilters, name]
      : currentFilters.filter((item) => item !== name);

    dispatch(setTempEquipmentFilter(updatedFilters));
  };

  return (
    <div className={styles.checkboxContainer}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="kitchen"
          onChange={handleCheckboxChange}
          className={styles.checkboxInput}
        />
        <span className={styles.checkboxContent}>
          <TbToolsKitchen2 />
          Kitchen
        </span>
      </label>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="shower"
          onChange={handleCheckboxChange}
          className={styles.checkboxInput}
        />
        <span className={styles.checkboxContent}>
          <LuShowerHead />
          Shower
        </span>
      </label>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="Automatic"
          onChange={handleCheckboxChange}
          className={styles.checkboxInput}
        />
        <span className={styles.checkboxContent}>
          <TbAutomaticGearbox />
          Automatic
        </span>
      </label>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="TV"
          onChange={handleCheckboxChange}
          className={styles.checkboxInput}
        />
        <span className={styles.checkboxContent}>
          <IoTvOutline />
          TV
        </span>
      </label>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="AC"
          onChange={handleCheckboxChange}
          className={styles.checkboxInput}
        />
        <span className={styles.checkboxContent}>
          <TbAirConditioning />
          AC
        </span>
      </label>
    </div>
  );
};

export default EquipmentFilter;
