import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async () => {
    const response = await axios.get(
      "https://662e153fa7dda1fa378bffe3.mockapi.io/campers"
    );
    return response.data;
  }
);

const initialState = {
  campers: [],
  filteredCampers: [],
  status: "idle",
  error: null,
  filters: {
    equipment: [],
    bodyType: [],
  },
  tempFilters: {
    equipment: [],
    bodyType: [],
  },
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setTempEquipmentFilter: (state, action) => {
      state.tempFilters.equipment = action.payload;
    },
    setTempBodyTypeFilter: (state, action) => {
      state.tempFilters.bodyType = action.payload;
    },
    applyFilters: (state) => {
      state.filters = state.tempFilters;
      state.filteredCampers = filterCampers(state.campers, state.filters);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.campers = action.payload;
        state.filteredCampers = filterCampers(action.payload, state.filters);
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const filterCampers = (campers, filters) => {
  return campers.filter((camper) => {
    const camperEquipment = camper.equipment.split(","); 
    const matchesEquipment = filters.equipment.every((item) =>
      camperEquipment.includes(item)
    );
    const matchesBodyType =
      filters.bodyType.length === 0 ||
      filters.bodyType.includes(camper.bodyType);
    return matchesEquipment && matchesBodyType;
  });
};

export const { setTempEquipmentFilter, setTempBodyTypeFilter, applyFilters } =
  campersSlice.actions;

export default campersSlice.reducer;
