// features/table/tableSlice.js

import { createSlice } from "@reduxjs/toolkit";
import baseData from "../../../mock/mockData";

export const defaultFilters = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  admissionDate: "",
  diagnosis: ""
}

export const defaultVisibleColumns = [
  "firstName", "lastName", "age", "gender", "admissionDate", "diagnosis"
]

export const initialState = {
  filters: defaultFilters,
  visibleColumns: defaultVisibleColumns,
  order: "asc",
  orderBy: "firstName",
  currentPage: 0,
  rowsPerPage: 10,
  headCells: [
    {
      id: "firstName",
      numeric: false,
      disablePadding: false,  
      label: "İsim",
    },
    {
      id: "lastName",
      numeric: false,
      disablePadding: false,
      label: "Soyisim",
    },
    {
      id: "age",
      numeric: true,
      disablePadding: false,
      label: "Yaş",
    },
    {
      id: "gender",
      numeric: false,
      disablePadding: false,
      label: "Cinsiyet",
    },
    {
      id: "admissionDate",
      numeric: false,
      disablePadding: false,
      label: "Başvuru Tarihi",
    },
    {
      id: "diagnosis",
      numeric: false,
      disablePadding: false,
      label: "Teşhis",
    },
  ],
  patients: baseData,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setVisibleColumns: (state, action) => {
      state.visibleColumns = action.payload;
      // Visible colonları set ettiğimiz yerde tablo componentinde gösterilecek olan headCells arrayini de update ediyoruz
      const updatedHeadCells = state.headCells.filter((item) => (action.payload).includes(item.id));
      state.headCells = updatedHeadCells;
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
    },
    setHeadCells: (state, action) => {
      state.headCells = action.payload;
    },
    setPatients: (state, action) => {
      state.patients = action.payload;
    },
  },
});

export const { setFilters, setVisibleColumns, setOrderBy, setOrder, setCurrentPage, setRowsPerPage, setHeadCells, setPatients } = tableSlice.actions;

export default tableSlice.reducer;