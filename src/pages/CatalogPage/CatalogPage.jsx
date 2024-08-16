import CamperList from "../../components/CampersList/CampersList";
import EquipmentFilter from "../../components/EquipmentFilter/EquipmentFilter";
import BodyTypeFilter from "../../components/BodyTypeFilter/BodyTypeFilter";
import { useDispatch } from "react-redux";
import { applyFilters } from "../../redux/campers/campersSlice";
import Navigation from "../../components/Navigation/Navigation";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(applyFilters());
  };

  return (
    <>
      <Navigation/>
      <EquipmentFilter />
      <BodyTypeFilter />
      <button onClick={handleSearch}>Search</button>
      <CamperList />
    </>
  );
};

export default CatalogPage;
