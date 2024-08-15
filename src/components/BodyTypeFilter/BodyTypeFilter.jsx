
import { useDispatch } from 'react-redux';
import { setTempBodyTypeFilter } from '../../redux/campers/campersSlice';

const BodyTypeFilter = () => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    dispatch(setTempBodyTypeFilter((prevFilters) =>
      checked ? [...prevFilters, name] : prevFilters.filter(item => item !== name)
    ));
  };

  return (
    <div>
      <label>
        <input type="checkbox" name="VAN" onChange={handleCheckboxChange} />
        VAN
      </label>
      <label>
        <input type="checkbox" name="MOTORHOME" onChange={handleCheckboxChange} />
        Motorhome
      </label>
      <label>
        <input type="checkbox" name="TRAILER" onChange={handleCheckboxChange} />
        Trailer
      </label>
    </div>
  );
};

export default BodyTypeFilter;
    