import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setTempBodyTypeFilter } from '../../redux/campers/campersSlice';

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
    <div>
      <label>
        <input type="checkbox" name="VAN" onChange={handleCheckboxChange} />
        VAN
      </label>
      <label>
        <input
          type="checkbox"
          name="Fully Integrated"
          onChange={handleCheckboxChange}
        />
        Fully Integrated
      </label>
      <label>
        <input type="checkbox" name="Alcove" onChange={handleCheckboxChange} />
        Alcove
      </label>
    </div>
  );
};


export default BodyTypeFilter;
    