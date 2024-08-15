
import { useDispatch } from 'react-redux';
import { setTempEquipmentFilter } from '../../redux/campers/campersSlice';

const EquipmentFilter = () => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    dispatch(setTempEquipmentFilter((prevFilters) =>
      checked ? [...prevFilters, name] : prevFilters.filter(item => item !== name)
    ));
  };

  return (
    <div>
      <label>
        <input type="checkbox" name="kitchen" onChange={handleCheckboxChange} />
        Kitchen
      </label>
      <label>
        <input type="checkbox" name="bathroom" onChange={handleCheckboxChange} />
        Bathroom
      </label>
      <label>
        <input type="checkbox" name="beds" onChange={handleCheckboxChange} />
        Beds
      </label>
    </div>
  );
};

export default EquipmentFilter;
    