import React from "react";

import CamperList from "../../components/CampersList/CampersList";
import EquipmentFilter from "../../components/EquipmentFilter/EquipmentFilter";
import BodyTypeFilter from "../../components/BodyTypeFilter/BodyTypeFilter";
import { useDispatch } from "react-redux";
import { applyFilters } from "../../redux/campers/campersSlice";
import Navigation from "../../components/Navigation/Navigation";
import Footer from '../../components/Footer/Footer'

import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(applyFilters());
  };

  return (
    <>
      <Navigation />
      <div className={styles.filters}>
        <EquipmentFilter />
        <BodyTypeFilter />
        <button className={styles.searchBtn} onClick={handleSearch}>
          Search
        </button>
      </div>
      <CamperList />
      <Footer/>
    </>
  );
};

export default CatalogPage;
