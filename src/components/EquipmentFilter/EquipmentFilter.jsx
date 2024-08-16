import { useDispatch, useSelector } from "react-redux";
import { setTempEquipmentFilter } from "../../redux/campers/campersSlice";

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
    <div>
      <label>
        <input type="checkbox" name="kitchen" onChange={handleCheckboxChange} />
        Kitchen
      </label>
      <label>
        <input type="checkbox" name="shower" onChange={handleCheckboxChange} />
        shower
      </label>
      <label>
        <input
          type="checkbox"
          name="Automatic"
          onChange={handleCheckboxChange}
        />
        Automatic
      </label>
      <label>
        <input type="checkbox" name="TV" onChange={handleCheckboxChange} />
        TV
      </label>
      <label>
        <input type="checkbox" name="AC" onChange={handleCheckboxChange} />
        AC
      </label>
    </div>
  );
};

export default EquipmentFilter;
